import {
  Users,
  Target,
  Handshake,
  BarChart3,
  Award,
  Leaf,
  GraduationCap,
  HeartPulse,
  Building2,
  TreePine,
  HardHat,
  Lightbulb,
  FileText,
  Activity,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Instituto Rede",
  fullName: "Instituto Rede de Apoio",
  description:
    "Desde 1998 promovendo educação, saúde e esporte com responsabilidade social.",
  url: "https://institutorededeapoio.org.br",
};

export const navLinks = [
  { href: "/institucional", label: "Institucional" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/trabalhe-conosco", label: "Trabalhe Conosco" },
  { href: "/governanca-e-integridade", label: "Governança e Integridade" },
  { href: "/transparencia", label: "Portal da Transparência" },
  { href: "/ouvidoria", label: "Ouvidoria e Canal de Integridade" },
  { href: "/contato", label: "Contato" },
];

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const differentials: Differential[] = [
  {
    icon: Users,
    title: "Equipe Multifacetada",
    description:
      "Profissionais de diversas áreas do conhecimento, garantindo soluções completas e integradas para cada desafio.",
  },
  {
    icon: Target,
    title: "Compromisso com Resultados",
    description:
      "Foco em entregas mensuráveis e impacto real nas comunidades e organizações que atendemos.",
  },
  {
    icon: Handshake,
    title: "Colaboração Intersetorial",
    description:
      "Articulação entre setor público, privado e sociedade civil para potencializar resultados.",
  },
  {
    icon: BarChart3,
    title: "Análises Detalhadas",
    description:
      "Diagnósticos baseados em dados e evidências para fundamentar decisões estratégicas.",
  },
  {
    icon: Award,
    title: "Execução com Excelência",
    description:
      "Processos consolidados e equipe capacitada para entregar projetos com qualidade e no prazo.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade Estratégica",
    description:
      "Soluções que consideram o impacto ambiental, social e econômico a longo prazo.",
  },
];

interface AreaOfAction {
  icon: LucideIcon;
  title: string;
  description: string;
  topics: string[];
}

export const areasOfAction: AreaOfAction[] = [
  {
    icon: GraduationCap,
    title: "Educação",
    description: "Soluções integradas para a gestão educacional pública.",
    topics: [
      "Gestão de redes de ensino",
      "Formação de educadores",
      "Avaliação educacional",
      "Tecnologia na educação",
      "Políticas educacionais",
    ],
  },
  {
    icon: HeartPulse,
    title: "Saúde",
    description: "Apoio estratégico para a gestão da saúde pública.",
    topics: [
      "Gestão hospitalar",
      "Atenção primária",
      "Vigilância em saúde",
      "Planejamento em saúde",
      "Capacitação profissional",
    ],
  },
  {
    icon: Building2,
    title: "Administração Pública",
    description: "Modernização e eficiência na gestão governamental.",
    topics: [
      "Planejamento estratégico",
      "Gestão de processos",
      "Transformação digital",
      "Gestão de pessoas",
      "Controle interno",
    ],
  },
  {
    icon: TreePine,
    title: "Sustentabilidade",
    description: "Desenvolvimento sustentável e responsabilidade ambiental.",
    topics: [
      "Políticas ambientais",
      "Gestão de resíduos",
      "Educação ambiental",
      "Licenciamento ambiental",
      "Projetos de conservação",
    ],
  },
  {
    icon: HardHat,
    title: "Infraestrutura",
    description: "Planejamento e gestão de obras e infraestrutura.",
    topics: [
      "Gestão de obras públicas",
      "Planejamento urbano",
      "Mobilidade urbana",
      "Saneamento básico",
      "Habitação",
    ],
  },
];

interface PublicManagementService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const publicManagementServices: PublicManagementService[] = [
  {
    icon: Lightbulb,
    title: "Desenvolvimento de Soluções",
    description:
      "Criação de soluções personalizadas para desafios específicos da gestão pública.",
  },
  {
    icon: FileText,
    title: "Elaboração e Gestão",
    description:
      "Elaboração de projetos, planos e programas com acompanhamento completo da execução.",
  },
  {
    icon: Activity,
    title: "Monitoramento e Capacitação",
    description:
      "Acompanhamento de indicadores e formação de equipes para resultados sustentáveis.",
  },
];

interface ImpactNumber {
  value: number;
  suffix: string;
  label: string;
}

export const impactNumbers: ImpactNumber[] = [
  { value: 20, suffix: "+", label: "Anos de experiência" },
  { value: 150, suffix: "+", label: "Projetos realizados" },
  { value: 80, suffix: "+", label: "Municípios atendidos" },
  { value: 500, suffix: "+", label: "Colaboradores" },
];

export const offices = [
  {
    label: "Escritório 1",
    address: "Avenida Fernandes Da Cunha, nº 552, Mares",
    city: "Salvador, Bahia",
    cep: "40.445-201",
  },
];
