import "server-only";
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import type { CvData } from "@/lib/cvData";

// ─── Font registration ─────────────────────────────────────────────────────
// @fontsource .woff files are static latin subsets compatible with fontkit.
// .woff2 from @fontsource 5.x are variable fonts that break fontkit's subsetter.
const CDN = "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/files";
Font.register({
  family: "Inter",
  fonts: [
    { src: `${CDN}/inter-latin-400-normal.woff`, fontWeight: 400 },
    { src: `${CDN}/inter-latin-500-normal.woff`, fontWeight: 500 },
    { src: `${CDN}/inter-latin-700-normal.woff`, fontWeight: 700 },
  ],
});

// Prevent hyphenation so words are never broken mid-word
Font.registerHyphenationCallback((word) => [word]);

// ─── Styles ────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 9,
    lineHeight: 1.4,
    color: "#333333",
    backgroundColor: "#ffffff",
    paddingTop: 40,
    paddingBottom: 60,
    paddingLeft: 45,
    paddingRight: 45,
  },

  // Header
  name: {
    fontSize: 26,
    fontWeight: 700,
    color: "#000000",
  },
  title: {
    fontSize: 11,
    fontWeight: 700,
    color: "#000000",
    marginTop: 4,
  },
  tagline: {
    fontSize: 9,
    color: "#555555",
    marginTop: 4,
    marginBottom: 6,
  },
  contactRow: {
    fontSize: 8.5,
    color: "#333333",
  },
  metaRow: {
    fontSize: 8.5,
    color: "#555555",
    marginTop: 2,
  },
  hr: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#DDDDDD",
    marginTop: 8,
    marginBottom: 0,
  },
  hrThin: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#DDDDDD",
    marginTop: 2,
    marginBottom: 4,
  },

  // Sections
  section: {
    marginTop: 10,
  },
  sectionHeader: {
    fontSize: 10,
    fontWeight: 700,
    color: "#000000",
    marginBottom: 2,
  },

  // Experience entries
  entry: {
    marginBottom: 5,
  },
  entryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  entryLeft: {
    flex: 1,
    marginRight: 8,
  },
  roleText: {
    fontSize: 9,
    fontWeight: 700,
    color: "#000000",
  },
  companyText: {
    fontSize: 9,
    fontWeight: 400,
    color: "#000000",
  },
  periodText: {
    fontSize: 8.5,
    color: "#666666",
    textAlign: "right",
  },

  // Bullets
  bulletRow: {
    flexDirection: "row",
    paddingLeft: 10,
    marginTop: 1.5,
  },
  bulletChar: {
    fontSize: 8.5,
    color: "#888888",
    marginRight: 4,
    lineHeight: 1.4,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: "#333333",
    lineHeight: 1.4,
  },
  bulletBold: {
    fontSize: 8.5,
    fontWeight: 700,
    color: "#000000",
  },

  // Skills
  skillsRow: {
    flexDirection: "row",
    marginTop: 2,
    flexWrap: "wrap",
  },
  skillLabel: {
    fontSize: 8.5,
    fontWeight: 700,
    color: "#000000",
  },
  skillValue: {
    fontSize: 8.5,
    color: "#333333",
    flex: 1,
  },

  // Education
  educationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
  educationLeft: {
    fontSize: 8.5,
    color: "#333333",
  },
  educationPeriod: {
    fontSize: 8.5,
    color: "#666666",
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 24,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 7,
    color: "#AAAAAA",
    fontFamily: "Inter",
  },
});

// ─── Helpers ───────────────────────────────────────────────────────────────

function renderBulletWithBold(
  text: string,
  boldTerms: string[]
): React.ReactNode[] {
  if (!boldTerms || boldTerms.length === 0) return [text];

  const sorted = [...boldTerms]
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  const escaped = sorted.map((t) =>
    t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(pattern).filter(Boolean);

  return parts.map((part, i) => {
    const isBold = sorted.some(
      (t) => t.toLowerCase() === part.toLowerCase()
    );
    return isBold ? (
      <Text key={i} style={styles.bulletBold}>
        {part}
      </Text>
    ) : (
      part
    );
  });
}

function Divider({ thin }: { thin?: boolean }) {
  return <View style={thin ? styles.hrThin : styles.hr} />;
}

function SectionHeader({ emoji, label }: { emoji: string; label: string }) {
  return (
    <>
      <Text style={styles.sectionHeader}>
        {emoji} {label}
      </Text>
      <Divider thin />
    </>
  );
}

function BulletItem({
  text,
  boldTerms,
}: {
  text: string;
  boldTerms: string[];
}) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletChar}>•</Text>
      <Text style={styles.bulletText}>
        {renderBulletWithBold(text, boldTerms)}
      </Text>
    </View>
  );
}

function ExperienceEntry({
  role,
  company,
  location,
  period,
  bullets,
  boldTerms,
}: {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
  boldTerms: string[];
}) {
  const companyStr = location ? `${company} (${location})` : company;
  return (
    <View style={styles.entry}>
      <View style={styles.entryRow}>
        <View style={styles.entryLeft}>
          <Text>
            <Text style={styles.roleText}>{role}</Text>
            <Text style={styles.companyText}> — {companyStr}</Text>
          </Text>
        </View>
        <Text style={styles.periodText}>{period}</Text>
      </View>
      {bullets.map((b, i) => (
        <BulletItem key={i} text={b} boldTerms={boldTerms} />
      ))}
    </View>
  );
}

// ─── Main Document ─────────────────────────────────────────────────────────

export function CVDocument({ data }: { data: CvData }) {
  const {
    name,
    title,
    tagline,
    contact,
    languages,
    residency,
    experience,
    projects,
    skills,
    education,
  } = data;

  const contactLine = [
    contact.email,
    contact.phone,
    contact.website,
    contact.linkedin,
  ].join("  |  ");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* ── HEADER ────────────────────────────────────────────────── */}
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.tagline}>{tagline}</Text>
        <Text style={styles.contactRow}>{contactLine}</Text>
        <Text style={styles.metaRow}>
          {languages}  ·  {residency}
        </Text>
        <Divider />

        {/* ── EXPERIENCE ────────────────────────────────────────────── */}
        <View style={styles.section}>
          <SectionHeader emoji="💼" label="Experience" />
          {experience.map((exp) => (
            <ExperienceEntry
              key={exp.id}
              role={exp.role}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              bullets={exp.bullets}
              boldTerms={exp.boldTerms}
            />
          ))}
        </View>

        {/* ── PROJECTS ──────────────────────────────────────────────── */}
        {projects && projects.length > 0 && (
          <View style={styles.section}>
            <SectionHeader emoji="🚀" label="Projects & Side Work" />
            {projects.map((proj) => (
              <ExperienceEntry
                key={proj.id}
                role={proj.role}
                company={proj.company}
                location={proj.location}
                period={proj.period}
                bullets={proj.bullets}
                boldTerms={proj.boldTerms}
              />
            ))}
          </View>
        )}

        {/* ── SKILLS ────────────────────────────────────────────────── */}
        <View style={styles.section}>
          <SectionHeader emoji="⚙️" label="Skills" />
          <View style={styles.skillsRow}>
            <Text style={styles.skillLabel}>Product & Design:  </Text>
            <Text style={styles.skillValue}>
              {skills.design.join("  •  ")}
            </Text>
          </View>
          <View style={[styles.skillsRow, { marginTop: 3 }]}>
            <Text style={styles.skillLabel}>Engineering:  </Text>
            <Text style={styles.skillValue}>
              {skills.engineering.join("  •  ")}
            </Text>
          </View>
        </View>

        {/* ── EDUCATION ─────────────────────────────────────────────── */}
        <View style={styles.section}>
          <SectionHeader emoji="🎓" label="Education" />
          {education.map((edu, i) => (
            <View key={i} style={styles.educationRow}>
              <Text style={styles.educationLeft}>
                {edu.degree} — {edu.school}
              </Text>
              <Text style={styles.educationPeriod}>{edu.period}</Text>
            </View>
          ))}
        </View>

        {/* ── FOOTER ────────────────────────────────────────────────── */}
        <Text style={styles.footer} fixed>
          Generated by AI  ·  abdelhamid-younis-portfolio.vercel.app
        </Text>
      </Page>
    </Document>
  );
}
