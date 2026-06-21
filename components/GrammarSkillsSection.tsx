"use client";

import { useState, useEffect, useRef } from "react";

// ─── Inline SVG thumbnails ────────────────────────────────────────────────────

function KonjunktivIIDark() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 200"
      role="img"
      aria-label="Konjunktiv II dark thumbnail"
    >
      <defs>
        <linearGradient id="bg-l-kii-d-p" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#08090F" />
          <stop offset="100%" stopColor="#0C0E1C" />
        </linearGradient>
        <linearGradient id="bg-r-kii-d-p" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E0720" />
          <stop offset="100%" stopColor="#180A38" />
        </linearGradient>
        <linearGradient id="seam-kii-d-p" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0C0E1C" />
          <stop offset="100%" stopColor="#180A38" />
        </linearGradient>
        <radialGradient id="glow-kii-d-p" cx="72%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#8B80F9" stopOpacity=".28" />
          <stop offset="100%" stopColor="#8B80F9" stopOpacity="0" />
        </radialGradient>
        <marker
          id="arr-kii-d-p"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M1 1L9 5L1 9"
            fill="none"
            stroke="context-stroke"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#bg-l-kii-d-p)" />
      <rect x="200" y="0" width="200" height="200" fill="url(#bg-r-kii-d-p)" />
      <rect x="200" y="0" width="200" height="200" fill="url(#glow-kii-d-p)" />
      <rect x="190" y="0" width="20" height="200" fill="url(#seam-kii-d-p)" />
      {/* City left */}
      <rect
        x="10"
        y="120"
        width="18"
        height="26"
        rx="1"
        fill="#1C2444"
        opacity=".45"
      />
      <rect
        x="34"
        y="126"
        width="24"
        height="20"
        rx="1"
        fill="#161E38"
        opacity=".4"
      />
      <rect
        x="64"
        y="130"
        width="16"
        height="16"
        rx="1"
        fill="#1C2444"
        opacity=".36"
      />
      <rect
        x="148"
        y="132"
        width="20"
        height="14"
        rx="1"
        fill="#1C2444"
        opacity=".28"
      />
      <rect
        x="14"
        y="125"
        width="4"
        height="3"
        rx="1"
        fill="#C8A84B"
        opacity=".32"
      />
      <rect
        x="38"
        y="131"
        width="4"
        height="3"
        rx="1"
        fill="#C8A84B"
        opacity=".26"
      />
      {/* Stars + orb right */}
      <circle cx="232" cy="26" r="1.2" fill="#FFFFFF" opacity=".38" />
      <circle cx="276" cy="16" r="1" fill="#FFFFFF" opacity=".32" />
      <circle cx="322" cy="30" r="1.5" fill="#FFFFFF" opacity=".28" />
      <circle cx="364" cy="18" r="1" fill="#FFFFFF" opacity=".30" />
      <circle cx="330" cy="62" r="36" fill="#8B80F9" opacity=".10" />
      {/* Figure */}
      <circle cx="336" cy="118" r="7" fill="#4A38A0" opacity=".45" />
      <ellipse cx="336" cy="136" rx="8" ry="10" fill="#4A38A0" opacity=".4" />
      <line
        x1="328"
        y1="131"
        x2="316"
        y2="124"
        stroke="#4A38A0"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".36"
      />
      <line
        x1="344"
        y1="131"
        x2="356"
        y2="124"
        stroke="#4A38A0"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".36"
      />
      {/* Eyebrows */}
      <text
        x="96"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing=".14em"
        fill="#FFFFFF"
        opacity=".28"
      >
        REAL
      </text>
      <text
        x="304"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing=".14em"
        fill="#FFFFFF"
        opacity=".35"
      >
        MÖGLICH
      </text>
      {/* Arrow */}
      <line
        x1="168"
        y1="56"
        x2="228"
        y2="56"
        stroke="rgba(255,255,255,.3)"
        strokeWidth="1.5"
        strokeLinecap="round"
        markerEnd="url(#arr-kii-d-p)"
      />
      <text
        x="198"
        y="45"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="9"
        fontWeight="600"
        fill="#FFFFFF"
        opacity=".38"
      >
        Wenn…
      </text>
      {/* Left block: habe */}
      <rect
        x="57"
        y="103"
        width="80"
        height="40"
        rx="8"
        fill="rgba(255,255,255,.07)"
        stroke="#5BA3D9"
        strokeWidth="1"
      />
      <rect
        x="57"
        y="103"
        width="80"
        height="40"
        rx="8"
        fill="#5BA3D9"
        opacity=".12"
      />
      <text
        x="97"
        y="128"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#5BA3D9"
      >
        habe
      </text>
      {/* Right block: hätte */}
      <rect
        x="262"
        y="103"
        width="80"
        height="40"
        rx="8"
        fill="rgba(255,255,255,.07)"
        stroke="#8B80F9"
        strokeWidth="1.5"
      />
      <rect
        x="262"
        y="103"
        width="80"
        height="40"
        rx="8"
        fill="#8B80F9"
        opacity=".14"
      />
      <text
        x="302"
        y="128"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#8B80F9"
      >
        hätte
      </text>
      {/* Ghost forms */}
      <text
        x="252"
        y="157"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="11"
        fontWeight="500"
        fill="#8B80F9"
        opacity=".3"
      >
        wäre
      </text>
      <text
        x="342"
        y="157"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="11"
        fontWeight="500"
        fill="#8B80F9"
        opacity=".22"
      >
        würde
      </text>
      {/* Formula */}
      <rect x="0" y="176" width="400" height="24" fill="rgba(0,0,0,.5)" />
      <line
        x1="0"
        y1="176"
        x2="400"
        y2="176"
        stroke="rgba(255,255,255,.08)"
        strokeWidth="1"
      />
      <text
        x="200"
        y="192"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="11"
        fontWeight="500"
      >
        <tspan fill="#6EE7B7">würde</tspan>
        <tspan fill="rgba(255,255,255,.45)" fontWeight="400">
          {" "}
          + Inf. ·{" "}
        </tspan>
        <tspan fill="#C4BEFF">wäre</tspan>
        <tspan fill="rgba(255,255,255,.45)" fontWeight="400">
          {" "}
          ·{" "}
        </tspan>
        <tspan fill="#C4BEFF">hätte</tspan>
      </text>
    </svg>
  );
}

function KonjunktivIILight() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 200"
      role="img"
      aria-label="Konjunktiv II light thumbnail"
    >
      <defs>
        <linearGradient id="bg-l-kii-l-p" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2F1FB" />
          <stop offset="100%" stopColor="#ECEAFB" />
        </linearGradient>
        <linearGradient id="bg-r-kii-l-p" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDE8FB" />
          <stop offset="100%" stopColor="#E4DEFA" />
        </linearGradient>
        <marker
          id="arr-kii-l-p"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M1 1L9 5L1 9"
            fill="none"
            stroke="context-stroke"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#bg-l-kii-l-p)" />
      <rect x="200" y="0" width="200" height="200" fill="url(#bg-r-kii-l-p)" />
      <line
        x1="200"
        y1="0"
        x2="200"
        y2="176"
        stroke="#7B6EF0"
        strokeWidth="1"
        opacity=".15"
      />
      {/* City left */}
      <rect
        x="10"
        y="120"
        width="18"
        height="26"
        rx="1"
        fill="#B8C4D8"
        opacity=".25"
      />
      <rect
        x="34"
        y="126"
        width="24"
        height="20"
        rx="1"
        fill="#C4CEDF"
        opacity=".22"
      />
      <rect
        x="64"
        y="130"
        width="16"
        height="16"
        rx="1"
        fill="#B8C4D8"
        opacity=".2"
      />
      <rect
        x="14"
        y="125"
        width="4"
        height="3"
        rx="1"
        fill="#C09020"
        opacity=".22"
      />
      {/* Dots + orb right */}
      <circle cx="232" cy="26" r="1.2" fill="#7B6EF0" opacity=".3" />
      <circle cx="276" cy="16" r="1" fill="#7B6EF0" opacity=".25" />
      <circle cx="322" cy="30" r="1.5" fill="#7B6EF0" opacity=".22" />
      <circle cx="330" cy="62" r="36" fill="#7B6EF0" opacity=".12" />
      <circle cx="336" cy="118" r="7" fill="#7B6EF0" opacity=".25" />
      <ellipse cx="336" cy="136" rx="8" ry="10" fill="#7B6EF0" opacity=".22" />
      <line
        x1="328"
        y1="131"
        x2="316"
        y2="124"
        stroke="#7B6EF0"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".2"
      />
      <line
        x1="344"
        y1="131"
        x2="356"
        y2="124"
        stroke="#7B6EF0"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".2"
      />
      {/* Eyebrows */}
      <text
        x="96"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing=".14em"
        fill="#7B6EF0"
        opacity=".5"
      >
        REAL
      </text>
      <text
        x="304"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing=".14em"
        fill="#7B6EF0"
        opacity=".6"
      >
        MÖGLICH
      </text>
      {/* Arrow */}
      <line
        x1="168"
        y1="56"
        x2="228"
        y2="56"
        stroke="rgba(0,0,0,.2)"
        strokeWidth="1.5"
        strokeLinecap="round"
        markerEnd="url(#arr-kii-l-p)"
      />
      <text
        x="198"
        y="45"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="9"
        fontWeight="600"
        fill="#7B6EF0"
        opacity=".5"
      >
        Wenn…
      </text>
      {/* Left block: habe */}
      <rect
        x="57"
        y="103"
        width="80"
        height="40"
        rx="8"
        fill="#FFFFFF"
        stroke="#2980B8"
        strokeWidth="1"
      />
      <rect
        x="57"
        y="103"
        width="80"
        height="40"
        rx="8"
        fill="#2980B8"
        opacity=".08"
      />
      <text
        x="97"
        y="128"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#2980B8"
      >
        habe
      </text>
      {/* Right block: hätte */}
      <rect
        x="262"
        y="103"
        width="80"
        height="40"
        rx="8"
        fill="#FFFFFF"
        stroke="#5B4FE0"
        strokeWidth="1.5"
      />
      <rect
        x="262"
        y="103"
        width="80"
        height="40"
        rx="8"
        fill="#5B4FE0"
        opacity=".08"
      />
      <text
        x="302"
        y="128"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#5B4FE0"
      >
        hätte
      </text>
      {/* Ghost forms */}
      <text
        x="252"
        y="157"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="11"
        fontWeight="500"
        fill="#5B4FE0"
        opacity=".3"
      >
        wäre
      </text>
      <text
        x="342"
        y="157"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="11"
        fontWeight="500"
        fill="#5B4FE0"
        opacity=".22"
      >
        würde
      </text>
      {/* Formula */}
      <rect x="0" y="176" width="400" height="24" fill="rgba(0,0,0,.06)" />
      <line
        x1="0"
        y1="176"
        x2="400"
        y2="176"
        stroke="rgba(0,0,0,.08)"
        strokeWidth="1"
      />
      <text
        x="200"
        y="192"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="11"
        fontWeight="500"
      >
        <tspan fill="#1A9E70">würde</tspan>
        <tspan fill="rgba(0,0,0,.4)" fontWeight="400">
          {" "}
          + Inf. ·{" "}
        </tspan>
        <tspan fill="#5B4FE0">wäre</tspan>
        <tspan fill="rgba(0,0,0,.4)" fontWeight="400">
          {" "}
          ·{" "}
        </tspan>
        <tspan fill="#5B4FE0">hätte</tspan>
      </text>
    </svg>
  );
}

function PassivDark() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 200"
      role="img"
      aria-label="Passiv dark thumbnail"
    >
      <defs>
        <linearGradient id="bg-l-pas-d-p" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A0D18" />
          <stop offset="100%" stopColor="#0E1530" />
        </linearGradient>
        <linearGradient id="bg-r-pas-d-p" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#080E1A" />
          <stop offset="100%" stopColor="#0C1828" />
        </linearGradient>
        <linearGradient id="seam-pas-d-p" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0E1530" />
          <stop offset="100%" stopColor="#0C1828" />
        </linearGradient>
        <radialGradient id="glow-pas-d-p" cx="72%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#5BA3D9" stopOpacity=".28" />
          <stop offset="100%" stopColor="#5BA3D9" stopOpacity="0" />
        </radialGradient>
        <marker
          id="arr-pas-d-p"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M1 1L9 5L1 9"
            fill="none"
            stroke="context-stroke"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#bg-l-pas-d-p)" />
      <rect x="200" y="0" width="200" height="200" fill="url(#bg-r-pas-d-p)" />
      <rect x="200" y="0" width="200" height="200" fill="url(#glow-pas-d-p)" />
      <rect x="190" y="0" width="20" height="200" fill="url(#seam-pas-d-p)" />
      {/* City */}
      <rect
        x="10"
        y="118"
        width="18"
        height="28"
        rx="1"
        fill="#1C2444"
        opacity=".5"
      />
      <rect
        x="34"
        y="124"
        width="24"
        height="22"
        rx="1"
        fill="#161E38"
        opacity=".45"
      />
      <rect
        x="64"
        y="128"
        width="16"
        height="18"
        rx="1"
        fill="#1C2444"
        opacity=".4"
      />
      <rect
        x="14"
        y="123"
        width="4"
        height="3"
        rx="1"
        fill="#C8A84B"
        opacity=".36"
      />
      <rect
        x="38"
        y="129"
        width="4"
        height="3"
        rx="1"
        fill="#C8A84B"
        opacity=".28"
      />
      {/* Orb + motion lines */}
      <circle cx="318" cy="60" r="32" fill="#5BA3D9" opacity=".09" />
      <line
        x1="218"
        y1="52"
        x2="262"
        y2="52"
        stroke="#5BA3D9"
        strokeWidth="0.8"
        opacity=".22"
      />
      <line
        x1="226"
        y1="62"
        x2="278"
        y2="62"
        stroke="#5BA3D9"
        strokeWidth="0.8"
        opacity=".17"
      />
      {/* Eyebrows */}
      <text
        x="96"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing=".14em"
        fill="#FFFFFF"
        opacity=".28"
      >
        AKTIV
      </text>
      <text
        x="304"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing=".14em"
        fill="#FFFFFF"
        opacity=".35"
      >
        PASSIV
      </text>
      {/* Arc */}
      <path
        d="M97 86 C97 36 303 36 303 86"
        fill="none"
        stroke="#FFD66B"
        strokeWidth="1.5"
        strokeLinecap="round"
        markerEnd="url(#arr-pas-d-p)"
      />
      {/* Left Row A: die Suppe */}
      <rect
        x="41"
        y="86"
        width="113"
        height="40"
        rx="8"
        fill="rgba(255,255,255,.07)"
        stroke="#FFD66B"
        strokeWidth="1.5"
      />
      <rect
        x="41"
        y="86"
        width="113"
        height="40"
        rx="8"
        fill="#FFD66B"
        opacity=".12"
      />
      <text
        x="97"
        y="111"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#FFD66B"
      >
        die Suppe
      </text>
      {/* Left Row B: Der Koch */}
      <rect
        x="45"
        y="130"
        width="104"
        height="40"
        rx="8"
        fill="rgba(255,255,255,.07)"
        stroke="#5BA3D9"
        strokeWidth="1"
      />
      <rect
        x="45"
        y="130"
        width="104"
        height="40"
        rx="8"
        fill="#5BA3D9"
        opacity=".12"
      />
      <text
        x="97"
        y="155"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#5BA3D9"
      >
        Der Koch
      </text>
      {/* Right Row A: Die Suppe★ */}
      <rect
        x="246"
        y="86"
        width="113"
        height="40"
        rx="8"
        fill="rgba(255,255,255,.07)"
        stroke="#FFD66B"
        strokeWidth="1.5"
      />
      <rect
        x="246"
        y="86"
        width="113"
        height="40"
        rx="8"
        fill="#FFD66B"
        opacity=".18"
      />
      <text
        x="303"
        y="111"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#FFD66B"
      >
        Die Suppe
      </text>
      {/* Right Row B: wird gek. */}
      <rect
        x="246"
        y="130"
        width="113"
        height="40"
        rx="8"
        fill="rgba(255,255,255,.07)"
        stroke="#8B80F9"
        strokeWidth="1.5"
      />
      <rect
        x="246"
        y="130"
        width="113"
        height="40"
        rx="8"
        fill="#8B80F9"
        opacity=".12"
      />
      <text
        x="303"
        y="155"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#8B80F9"
      >
        wird gek.
      </text>
      {/* Formula */}
      <rect x="0" y="176" width="400" height="24" fill="rgba(0,0,0,.5)" />
      <line
        x1="0"
        y1="176"
        x2="400"
        y2="176"
        stroke="rgba(255,255,255,.08)"
        strokeWidth="1"
      />
      <text
        x="200"
        y="192"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="11"
        fontWeight="500"
      >
        <tspan fill="#6EE7B7">werden</tspan>
        <tspan fill="rgba(255,255,255,.45)" fontWeight="400">
          {" "}
          +{" "}
        </tspan>
        <tspan fill="#C4BEFF">Partizip II</tspan>
      </text>
    </svg>
  );
}

function PassivLight() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 200"
      role="img"
      aria-label="Passiv light thumbnail"
    >
      <defs>
        <linearGradient id="bg-l-pas-l-p" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0F4FA" />
          <stop offset="100%" stopColor="#E8EEF8" />
        </linearGradient>
        <linearGradient id="bg-r-pas-l-p" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EBF3FA" />
          <stop offset="100%" stopColor="#E0EDF8" />
        </linearGradient>
        <marker
          id="arr-pas-l-p"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M1 1L9 5L1 9"
            fill="none"
            stroke="context-stroke"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#bg-l-pas-l-p)" />
      <rect x="200" y="0" width="200" height="200" fill="url(#bg-r-pas-l-p)" />
      <line
        x1="200"
        y1="0"
        x2="200"
        y2="176"
        stroke="#5BA3D9"
        strokeWidth="1"
        opacity=".15"
      />
      {/* City */}
      <rect
        x="10"
        y="118"
        width="18"
        height="28"
        rx="1"
        fill="#B8C4D8"
        opacity=".25"
      />
      <rect
        x="34"
        y="124"
        width="24"
        height="22"
        rx="1"
        fill="#C4CEDF"
        opacity=".22"
      />
      <rect
        x="14"
        y="123"
        width="4"
        height="3"
        rx="1"
        fill="#C09020"
        opacity=".22"
      />
      {/* Orb + lines */}
      <circle cx="318" cy="60" r="32" fill="#5BA3D9" opacity=".12" />
      <line
        x1="218"
        y1="52"
        x2="262"
        y2="52"
        stroke="#5BA3D9"
        strokeWidth="0.8"
        opacity=".3"
      />
      <line
        x1="226"
        y1="62"
        x2="278"
        y2="62"
        stroke="#5BA3D9"
        strokeWidth="0.8"
        opacity=".25"
      />
      {/* Eyebrows */}
      <text
        x="96"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing=".14em"
        fill="#5BA3D9"
        opacity=".5"
      >
        AKTIV
      </text>
      <text
        x="304"
        y="22"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing=".14em"
        fill="#5BA3D9"
        opacity=".6"
      >
        PASSIV
      </text>
      {/* Arc */}
      <path
        d="M97 86 C97 36 303 36 303 86"
        fill="none"
        stroke="#C09020"
        strokeWidth="1.5"
        strokeLinecap="round"
        markerEnd="url(#arr-pas-l-p)"
      />
      {/* Left Row A: die Suppe */}
      <rect
        x="41"
        y="86"
        width="113"
        height="40"
        rx="8"
        fill="#FFFFFF"
        stroke="#C09020"
        strokeWidth="1.5"
      />
      <rect
        x="41"
        y="86"
        width="113"
        height="40"
        rx="8"
        fill="#C09020"
        opacity=".08"
      />
      <text
        x="97"
        y="111"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#C09020"
      >
        die Suppe
      </text>
      {/* Left Row B: Der Koch */}
      <rect
        x="45"
        y="130"
        width="104"
        height="40"
        rx="8"
        fill="#FFFFFF"
        stroke="#2980B8"
        strokeWidth="1"
      />
      <rect
        x="45"
        y="130"
        width="104"
        height="40"
        rx="8"
        fill="#2980B8"
        opacity=".08"
      />
      <text
        x="97"
        y="155"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#2980B8"
      >
        Der Koch
      </text>
      {/* Right Row A: Die Suppe★ */}
      <rect
        x="246"
        y="86"
        width="113"
        height="40"
        rx="8"
        fill="#FFFFFF"
        stroke="#C09020"
        strokeWidth="1.5"
      />
      <rect
        x="246"
        y="86"
        width="113"
        height="40"
        rx="8"
        fill="#C09020"
        opacity=".12"
      />
      <text
        x="303"
        y="111"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#C09020"
      >
        Die Suppe
      </text>
      {/* Right Row B: wird gek. */}
      <rect
        x="246"
        y="130"
        width="113"
        height="40"
        rx="8"
        fill="#FFFFFF"
        stroke="#5B4FE0"
        strokeWidth="1.5"
      />
      <rect
        x="246"
        y="130"
        width="113"
        height="40"
        rx="8"
        fill="#5B4FE0"
        opacity=".08"
      />
      <text
        x="303"
        y="155"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#5B4FE0"
      >
        wird gek.
      </text>
      {/* Formula */}
      <rect x="0" y="176" width="400" height="24" fill="rgba(0,0,0,.06)" />
      <line
        x1="0"
        y1="176"
        x2="400"
        y2="176"
        stroke="rgba(0,0,0,.08)"
        strokeWidth="1"
      />
      <text
        x="200"
        y="192"
        textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif"
        fontSize="11"
        fontWeight="500"
      >
        <tspan fill="#1A9E70">werden</tspan>
        <tspan fill="rgba(0,0,0,.4)" fontWeight="400">
          {" "}
          +{" "}
        </tspan>
        <tspan fill="#5B4FE0">Partizip II</tspan>
      </text>
    </svg>
  );
}

// ─── Live skill demo ──────────────────────────────────────────────────────────

const RULES = [
  {
    slug: "konjunktiv-2",
    title: "Konjunktiv II",
    sub: "The subjunctive of hypotheticals",
    desc: 'Say "would", soften requests, and talk about what isn\'t real — with würde, wäre and hätte.',
    levels: ["B1", "B2"],
    dark: KonjunktivIIDark,
    light: KonjunktivIILight,
  },
  {
    slug: "passiv",
    title: "Das Passiv",
    sub: "The passive voice",
    desc: "Focus on the action, not the doer — werden + Partizip II, von vs. durch, the state passive.",
    levels: ["B1", "B2", "C1"],
    dark: PassivDark,
    light: PassivLight,
  },
];

const SKILL_STEPS = [
  {
    tag: "grammar-rule-creator",
    label: "Scope & plan",
    detail:
      "Resolves the grammar point, slug, levels, and category. Merges thin overlapping facets into one coherent guide.",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/30",
    accent: "#8B80F9",
  },
  {
    tag: "grammar-rule-creator",
    label: "Generate page",
    detail:
      "Creates app/grammar/<slug>/page.tsx using primitives (Hero, Section, Formula, ConjGrid…), quiz questions, and worked examples.",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    accent: "#5BA3D9",
  },
  {
    tag: "grammar-svg-illustration",
    label: "Generate thumbnail",
    detail:
      "Produces two self-contained SVGs (dark + light) — atmospheric scene, grammar blocks, arc connectors — with zero CSS variables.",
    color: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/30",
    accent: "#6EE7B7",
  },
  {
    tag: "grammar-rule-creator",
    label: "Register & verify",
    detail:
      "Appends the GrammarRuleMeta to registry.ts and runs tsc --noEmit without touching the running dev server.",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/30",
    accent: "#FFD66B",
  },
];

function SkillPipeline() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % SKILL_STEPS.length);
    }, 2200);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {SKILL_STEPS.map((step, i) => (
        <button
          key={i}
          onClick={() => {
            setActive(i);
            if (intervalRef.current) clearInterval(intervalRef.current);
          }}
          className={`
            text-left rounded-xl border px-4 py-3 transition-all duration-300
            ${
              i === active
                ? `bg-gradient-to-r ${step.color} ${step.border}`
                : "border-gray-200/40 dark:border-white/8 bg-transparent hover:bg-gray-100/50 dark:hover:bg-white/4"
            }
          `}
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border"
              style={{
                color: i === active ? step.accent : "#6B7280",
                borderColor: i === active ? step.accent + "55" : "#6B728033",
                backgroundColor:
                  i === active ? step.accent + "15" : "transparent",
              }}
            >
              {step.tag}
            </span>
            <span
              className="text-xs font-semibold"
              style={{ color: i === active ? step.accent : undefined }}
            >
              {i + 1}. {step.label}
            </span>
          </div>
          {i === active && (
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {step.detail}
            </p>
          )}
        </button>
      ))}
    </div>
  );
}

function GrammarCardDemo({ isDark }: { isDark: boolean }) {
  const [selected, setSelected] = useState(0);
  const rule = RULES[selected];
  const SVGComp = isDark ? rule.dark : rule.light;

  return (
    <div className="flex flex-col gap-3">
      {/* Rule picker */}
      <div className="flex gap-2">
        {RULES.map((r, i) => (
          <button
            key={r.slug}
            onClick={() => setSelected(i)}
            className={`
              text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all
              ${
                i === selected
                  ? "border-violet-400/50 bg-violet-500/15 text-violet-300 dark:text-violet-300"
                  : "border-gray-300/40 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-gray-400/60"
              }
            `}
          >
            {r.title}
          </button>
        ))}
      </div>

      {/* Card preview */}
      <div
        className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
          isDark ? "border-white/10 bg-[#151826]" : "border-gray-200 bg-white"
        }`}
        style={{
          boxShadow: isDark
            ? "0 4px 24px rgba(0,0,0,.4)"
            : "0 4px 24px rgba(0,0,0,.08)",
        }}
      >
        {/* Thumbnail */}
        <div className="w-full overflow-hidden" style={{ lineHeight: 0 }}>
          <SVGComp />
        </div>
        {/* Card body */}
        <div className="px-5 pt-4 pb-5">
          <h4
            className="font-bold text-base mb-0.5"
            style={{ color: isDark ? "#F5F5FA" : "#14141F" }}
          >
            {rule.title}
          </h4>
          <p
            className="text-sm mb-2"
            style={{ color: isDark ? "#8B80F9" : "#5B4FE0" }}
          >
            {rule.sub}
          </p>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: isDark ? "rgba(245,245,250,.62)" : "#565666" }}
          >
            {rule.desc}
          </p>
          <div className="flex gap-2">
            {rule.levels.map((lvl) => (
              <span
                key={lvl}
                className="text-xs font-semibold px-2.5 py-1 rounded-lg border"
                style={{
                  color: isDark ? "rgba(245,245,250,.7)" : "#565666",
                  borderColor: isDark ? "rgba(255,255,255,.15)" : "#D1D5DB",
                  background: isDark ? "rgba(255,255,255,.06)" : "#F9FAFB",
                }}
              >
                {lvl}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main exported section ────────────────────────────────────────────────────

export default function GrammarSkillsSection() {
  const [isDark, setIsDark] = useState(true);

  return (
    <section className="mb-20">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          AI Skill System — Grammar Rules & Thumbnails
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Each grammar guide on lehr.app is generated by a two-skill pipeline I
          designed and iterated on across multiple sessions. The first skill,{" "}
          <code className="text-xs font-mono bg-gray-100 dark:bg-white/8 px-1.5 py-0.5 rounded text-violet-600 dark:text-violet-400">
            grammar-rule-creator
          </code>
          , scaffolds a full Next.js page — teaching structure, conjugation
          tables, worked examples and a retrieval quiz — from a single grammar
          topic name. The second,{" "}
          <code className="text-xs font-mono bg-gray-100 dark:bg-white/8 px-1.5 py-0.5 rounded text-teal-600 dark:text-teal-400">
            grammar-svg-illustration
          </code>
          , generates atmospheric SVG card thumbnails that visualise the grammar
          mechanic as a two-world scene, in both dark and light mode, with zero
          CSS variable dependencies.
        </p>
      </div>

      {/* Skill pipeline */}
      <p className="text-gray-700 text-xl font-bold dark:text-gray-300 mb-3 mt-8 leading-relaxed">
        How the skill pipeline works
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Both skills run in parallel on every new grammar topic. The agent
        receives a rule name, resolves it to a grammar point enum and slug,
        generates the guide and thumbnail simultaneously, registers the route,
        and type-checks without touching the running dev server.
      </p>

      {/* Interactive demo */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 items-start">
        {/* Left: pipeline stepper */}
        {/* <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
            4-step execution
          </p>
          <SkillPipeline />
        </div> */}

        {/* Right: live card preview */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              Live card preview
            </p>
            {/* Dark / light toggle */}
            <button
              onClick={() => setIsDark((d) => !d)}
              className={`
                flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all
                ${
                  isDark
                    ? "border-violet-500/40 bg-violet-500/15 text-violet-300"
                    : "border-amber-400/40 bg-amber-50 text-amber-700 dark:text-amber-400"
                }
              `}
            >
              {isDark ? (
                <>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
                  </svg>
                  Dark mode
                </>
              ) : (
                <>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  Light mode
                </>
              )}
            </button>
          </div>

          <GrammarCardDemo isDark={isDark} />
        </div>
      </div>
    </section>
  );
}
