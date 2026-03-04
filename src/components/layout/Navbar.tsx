"use client";

import CardNav from "./CardNav";

const navItems = [
  {
    label: "Institucional",
    bgColor: "#0A2540",
    textColor: "#fff",
    links: [
      {
        label: "Sobre Nós",
        href: "/institucional",
        ariaLabel: "Conheça o Instituto",
      },
      {
        label: "Áreas de Atuação",
        href: "/areas-de-atuacao",
        ariaLabel: "Áreas de Atuação",
      },
      {
        label: "Trabalhe Conosco",
        href: "/trabalhe-conosco",
        ariaLabel: "Trabalhe Conosco",
      },
    ],
  },
  {
    label: "Governança",
    bgColor: "#163B65",
    textColor: "#fff",
    links: [
      {
        label: "Governança e Integridade",
        href: "/governanca-e-integridade",
        ariaLabel: "Governança e Integridade",
      },
      {
        label: "Portal da Transparência",
        href: "/transparencia",
        ariaLabel: "Portal da Transparência",
      },
    ],
  },
  {
    label: "Comunicação",
    bgColor: "#1E4D7B",
    textColor: "#fff",
    links: [
      {
        label: "Ouvidoria",
        href: "/ouvidoria",
        ariaLabel: "Ouvidoria e Canal de Integridade",
      },
      {
        label: "Contato",
        href: "/contato",
        ariaLabel: "Entre em Contato",
      },
    ],
  },
];

export default function Navbar() {
  return (
    <CardNav
      items={navItems}
      baseColor="rgba(255, 255, 255, 0.65)"
      menuColor="#0A2540"
      buttonBgColor="#0A2540"
      buttonTextColor="#fff"
      buttonLabel="Contato"
      buttonHref="/contato"
      ease="power3.out"
    />
  );
}
