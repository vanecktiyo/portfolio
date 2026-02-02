import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  ArrowRight,
  Github,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Rocket,
  Star,
  Moon,
  Sun,
  BookOpen,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/ui/card";


// —————————————————————————————————————————————
// PORTFOLIO 
// Brand noir/jaune + Vision + Case Studies
// React + Tailwind + Framer Motion
// —————————————————————————————————————————————

export default function App() {
  const [dark, setDark] = useState(true);
  const toggleTheme = () => setDark((d) => !d);

  const contact = useMemo(
    () => ({
      name: "Vaneck DAGAR",
      title: "Analyser le présent, anticiper l'avenir",
      subtitle: "Data Science | Data Engineer | Machine Learning | Intelligence Artificielle | Data Analytics | Business Analysis",
      pitch:
        "Futur ingénieur, j'aide les organisations à y voir plus clair dans leurs informations. Mon travail consiste à faire parler les données pour comprendre une situation actuelle, puis à créer des outils capables d'apprendre de ces données pour anticiper ce qui va arriver.",
      email: "dagarvaneck@gmail.com",
      phone: "+33 7 59 54 03 79",
      location: "Lille, France",
      linkedin: "https://www.linkedin.com/in/vaneck-dagar/",
      github: "https://github.com/vanecktiyo",
      cvUrl: "CV_Vaneck_Dagar.pdf",
      availability: "À la recherche d'une alternance de 12 mois pour mon Master 2 dès septembre 2026, sur un rythme de 2 jours à l'école et 3 jours en entreprise.",
    }),
    []
  );

  const projects = useMemo(
    () => [
      {
        slug: "kaggle-energie",
        year: "2025",
        title: "Prédiction de consommation énergétique (Kaggle)",
        desc: "Prévision de la consommation pour 100k+ bâtiments avec feature engineering avancé et modèles de régression.",
        tags: ["ML", "Régression", "Énergie", "Python"],
        case: {
          problem:
            "Réduire les coûts et l’empreinte carbone en prévoyant précisément la consommation énergétique à grande échelle.",
          approach: [
            "Prétraitement : contrôle qualité, agrégation météo / calendrier / métadonnées bâtiments.",
            "Feature engineering avancé sur les caractéristiques des bâtiments, l’historique de consommation et les effets temporels.",
            "Modèles : LightGBM, XGBoost, stacking, validation en KFold temporel.",
            "Suivi des performances via RMSE, comparaison aux baselines et analyse des résidus.",
          ],
          impact: [
            "Réduction d’environ 18 % du RMSE par rapport à la baseline initiale.",
            "Identification de profils de bâtiments et de périodes propices aux gains énergétiques.",
          ],
          stack: ["Python", "pandas", "scikit-learn", "LightGBM", "Matplotlib"],
        },
      },
      {
        slug: "carla-agent",
        year: "2025",
        title: "Agent de conduite autonome — LLM/VLM + RAG (CARLA)",
        desc: "Agent décisionnel capable de respecter le code de la route en simulation grâce au couplage vision + raisonnement.",
        tags: ["LLM", "VLM", "RAG", "Vision", "CARLA"],
        case: {
          problem:
            "Rendre les décisions de conduite plus explicables tout en respectant les règles du code de la route en environnement simulé.",
          approach: [
            "Perception visuelle : détection d’objets, segmentation de la scène, extraction d’éléments critiques (voies, panneaux, feux).",
            "Raisonnement : LLM avec RAG connecté à une base de connaissances structurée du code de la route.",
            "Boucle perception → décision → action intégrée dans CARLA (contrôle bas niveau du véhicule).",
            "Journalisation des décisions et explications fournies par le LLM.",
          ],
          impact: [
            "Diminution des infractions simulées par rapport aux agents baselines.",
            "Décisions plus explicables via les chaînes de raisonnement du LLM et les règles mobilisées.",
          ],
          stack: ["CARLA", "Transformers", "OpenCV", "Python", "RAG"],
        },
      },
      {
        slug: "cloud-native-ci",
        year: "2025",
        title: "Application cloud-native & pipeline CI/CD",
        desc: "API FastAPI conteneurisée avec PostgreSQL et pipeline GitHub Actions du build au déploiement.",
        tags: ["FastAPI", "Docker", "CI/CD", "PostgreSQL"],
        case: {
          problem:
            "Passer d’un prototype local à un service Data/IA fiable, versionné et livrable en continu.",
          approach: [
            "Conception du schéma PostgreSQL et migrations.",
            "Containerisation avec Docker multi-stage pour des images légères et reproductibles.",
            "Mise en place d’un pipeline CI/CD GitHub Actions : tests, build, push d’images et déploiement.",
          ],
          impact: [
            "Réduction d’environ 40 % du temps nécessaire pour livrer une nouvelle version.",
            "Environnement stable, industrialisable et prêt pour l’intégration de modèles ML.",
          ],
          stack: ["FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
        },
      },
  
      {
        slug: "powerbi-energy-co2",
        year: "2026",
        title: "Analyse Consommation Énergie & Émissions CO₂ (Power BI)",
        desc: "Dashboard interactif analysant la relation entre consommation d'énergie et émissions de CO₂ pour identifier les pays modèles en transition énergétique.",
        Url: "https://github.com/vanecktiyo/BI_project/",
        tags: ["Power BI", "Data Viz", "Énergie", "Environnement"],
        case: {
          problem: "Analyser l'impact de la consommation d'énergie sur les émissions de CO₂ et identifier les leviers pour une transition plus propre.",
          approach: [
            "Import et nettoyage des datasets OWID (CO₂ et Énergie).",
            "Création de visualisations interactives : cartes, graphiques temporels, classements.",
            "Analyse corrélation énergie/CO₂ et identification pays modèles/prioritaires.",
            "Ajout de filtres (années, pays) et insights/recommandations."
          ],
          impact: [
            "Augmentation de 46% des émissions CO₂ depuis 2000 mise en évidence.",
            "Classement clair des pays modèles (Islande, Norvège, Suède…) et des émetteurs prioritaires pour une transition énergétique (Chine, Inde, États-Unis…).",
            "Outil pour suivre l'évolution et soutenir des décisions énergétiques."
          ],
          stack: ["Power BI", "DAX", "Power Query", "OWID Datasets"]
        }
      },

      {
        slug: "accidents-open-data",
        year: "2024",
        title: "Dashboard accidents routiers (Open Data)",
        desc: "Analyse de 200k+ enregistrements et visualisations interactives pour comprendre les facteurs d’accidents.",
        tags: ["Open Data", "Dash", "Plotly"],
        case: {
          problem:
            "Offrir aux décideurs locaux une vision claire des zones et périodes les plus accidentogènes.",
          approach: [
            "ETL léger sur données publiques : nettoyage, normalisation, enrichissement contextuel.",
            "Construction de KPIs (type d’accident, gravité, conditions météo, horaires, zones).",
            "Dashboard interactif avec filtres par zone, type d’accident, période et contexte.",
          ],
          impact: [
            "Exploration rapide des zones critiques et des périodes à risque.",
            "Support pour orienter les campagnes de prévention routière locales.",
          ],
          stack: ["Python", "pandas", "Dash", "Plotly"],
        },
      },
    ],
    []
  );

  const experience = useMemo(
  () => [

    {
      slug: "simulation-exploration-experience",
      period: "Depuis janvier 2026",
      company: "NASA : Simulation Exploration Expérience (SEE)",
      role: "Data & Simulation",
      location: "International · Remote",
      link: "https://simulationexplorationexperience.org/",
      tags: [
        "Data Analysis",
        "Simulation",
        "Exploration Spatiale",
        "NASA",
        "Python",
        "Modélisation",
        "Travail collaboratif"
      ],
      desc:
        "Participation à un programme international de simulation d’exploration spatiale, mené dans un cadre éducatif soutenu par la NASA, mettant la donnée au cœur de la modélisation, de l’analyse de scénarios et de la prise de décision.",
      bullets: [
        "Analyse et exploitation de données issues de simulations d’exploration spatiale (missions, ressources, contraintes).",
        "Contribution à la modélisation et à l’interprétation de scénarios complexes dans un contexte inspiré de missions spatiales réelles.",
        "Utilisation d’une approche data-driven pour soutenir la prise de décision collective.",
        "Travail collaboratif en équipe internationale dans un cadre éducatif associé à la NASA."
      ],
      case: {
        problem:
          "Comment exploiter efficacement les données générées par des simulations complexes pour soutenir la prise de décision dans des scénarios d’exploration spatiale, en cohérence avec les problématiques abordées par la NASA.",
        approach: [
          "Analyse de données issues de scénarios de simulation (états systèmes, ressources, contraintes).",
          "Structuration et interprétation des résultats pour identifier tendances, risques et leviers d’optimisation.",
          "Collaboration avec des équipes internationales dans un cadre de simulation inspiré de standards spatiaux.",
          "Synthèse des analyses sous forme de recommandations basées sur les données."
        ],
        impact: [
          "Renforcement des compétences en analyse de données appliquée à des systèmes complexes.",
          "Approche data-driven de la prise de décision dans un contexte d’exploration spatiale.",
          "Exposition à un cadre de travail éducatif international associé à la NASA."
        ],
        stack: [
          "Python",
          "Analyse de données",
          "Simulation",
          "Modélisation",
          "Exploration spatiale"
        ],
      },
    }
      ,

        {
      slug: "rebond-et-match-ia",
      period: "juin 2025 – Aujourd’hui",
      company: "Rebond & Match",
      role: "Développeur IA (Bénévolat)",
      location: "France",
      link: "https://www.linkedin.com/company/rebondetmatch/",
      tags: [
        "IA",
        "SaaS",
        "Algorithmes",
        "Bases de données",
        "Python",
        "Machine Learning"
      ],
      desc:
        "Conception et développement de solutions SaaS intégrant des algorithmes d’IA et des systèmes de gestion de données, au service de projets à impact social.",
      bullets: [
        "Conception et développement de solutions SaaS intégrant des algorithmes d’intelligence artificielle.",
        "Implémentation de logiques IA pour répondre à des problématiques métiers concrètes.",
        "Participation à la structuration et à la gestion des bases de données de la plateforme.",
        "Collaboration avec une équipe pluridisciplinaire dans un contexte associatif et à impact.",
      ],
      case: {
        problem:
          "Développer des solutions technologiques intelligentes capables de soutenir des projets à impact social, tout en garantissant robustesse, évolutivité et exploitabilité des données.",
        approach: [
          "Analyse des besoins fonctionnels et métiers de la plateforme Rebond & Match.",
          "Conception de briques IA adaptées aux cas d’usage identifiés (automatisation, aide à la décision).",
          "Développement de solutions SaaS intégrant algorithmes d’IA et gestion structurée des données.",
          "Travail collaboratif avec les parties prenantes pour aligner la solution technique avec l’impact recherché.",
        ],
        impact: [
          "Contribution directe à des projets à impact social via l’IA.",
          "Mise en production de briques techniques exploitables dans un environnement SaaS.",
          "Renforcement de la fiabilité et de la structuration des données de la plateforme.",
        ],
        stack: [
          "Python",
          "Machine Learning",
          "IA",
          "Bases de données",
          "SaaS"
        ],
      },
    },


    {
      slug: "krakos-lig",
      period: "Jan 2025 – Jun 2025",
      company: "Équipe KrakOs (Laboratoire LIG)",
      role: "Stagiaire Développement Systèmes & IA",
      location: "Grenoble, France",
       link: "https://github.com/vanecktiyo/usm",
      tags: ["Python", "C", "Linux", "Git/GitHub", "Pandas", "NumPy", "Scikit-learn"],
      desc:
        "Optimisation des ressources système sous Linux via USM(Userspace memory management) et des approches IA/ML : évaluation comparative, politiques prédictives et validation expérimentale.",
      bullets: [
        "Développement d’un modèle d’IA pour l’optimisation des ressources système sous Linux (gestion mémoire, monitoring, comparaison de performances).",
        "Conception et évaluation d’approches transposables à l’optimisation des flux et des stocks (vision ‘système’ & décision).",
        "Implémentation et tests d’une politique de gestion prédictive démontrant l’apport du ML sur des systèmes complexes.",
      ],
      case: {
        problem:
          "Optimiser la gestion des ressources (notamment mémoire) sur un système Linux afin d’améliorer la stabilité et les performances, tout en validant la transférabilité de l’approche à d’autres problématiques d’optimisation.",
        approach: [
          "Mise en place d’un pipeline d’acquisition/structuration des données système (indicateurs mémoire/ressources).",
          "Feature engineering et expérimentation de modèles ML pour prédire/anticiper les pics et comportements critiques.",
          "Comparaison des performances (baselines vs approches ML), suivi des métriques et tests de robustesse.",
          "Implémentation d’une politique de gestion prédictive et validation sur scénarios contrôlés.",
        ],
        impact: [
          "Approche évaluée expérimentalement avec une logique de comparaison et de reproductibilité.",
          "Base solide pour un pilotage prédictif des ressources, transposable à d’autres domaines d’optimisation.",
        ],
        stack: ["Python", "C", "Linux", "Pandas", "NumPy", "Scikit-learn", "Git/GitHub"],
      },
    },

    {
      slug: "digital-gong-data-analyst",
      period: "Mar 2024 – May 2024",
      company: "Digital Gong Technologies",
      role: "Stagiaire Data Analyst",
      location: "Cameroun",
      tags: ["Python", "Pandas", "Scikit-learn", "SQL", "Power BI", "DAX", "Power Query", "Power Pivot"],
      desc:
        "Analyse de données clients & campagnes : EDA, segmentation/insights, modèles prédictifs et dashboards Power BI pour piloter la performance.",
      bullets: [
        "Analyse exploratoire (EDA) des données clients et campagnes (Python/SQL) pour identifier tendances, segments et leviers de performance.",
        "Développement de modèles prédictifs (Random Forest, régression logistique) pour optimiser les campagnes marketing : +15 % de fidélisation.",
        "Conception de dashboards Power BI (KPIs marketing/commerciaux) et automatisation du reporting : +20 % d’efficacité opérationnelle.",
      ],
      case: {
        problem:
          "Améliorer la performance des campagnes marketing en transformant les données clients en décisions actionnables : meilleure segmentation, ciblage plus efficace et reporting fiable.",
        approach: [
          "Data analysis : nettoyage, structuration et EDA pour comprendre comportements, tendances et segments clients.",
          "Construction de KPIs et définition d’un cadre de mesure (conversion, rétention, ROI, performance par segment/canal).",
          "Modélisation : Random Forest et régression logistique pour prédire/optimiser le ciblage et prioriser les actions.",
          "BI : dashboards Power BI et automatisation du reporting (Power Query, DAX) pour réduire le temps de production et fiabiliser le suivi.",
        ],
        impact: [
          "Augmentation du taux de fidélisation client de 15 % grâce à l’optimisation des campagnes.",
          "Automatisation du reporting et amélioration du ciblage : +20 % d’efficacité opérationnelle.",
          "Une chaîne complète “Analyse → Modèle → Dashboard” pour industrialiser la prise de décision.",
        ],
        stack: ["Python", "Pandas", "SQL", "Scikit-learn", "Power BI", "DAX", "Power Query", "Power Pivot"],
      },
    },

    {
      slug: "kimbocare-mobile-ia",
      period: "Jun 2024 – Aug 2024",
      company: "Kimbocare",
      role: "Stagiaire Développement Mobile & IA",
      location: "Cameroun",
      tags: ["Angular", "Laravel", "Scikit-learn"],
      desc:
        "Développement d’une application mobile de gestion de restaurant et intégration d’un module IA de recommandation orienté satisfaction client.",
      bullets: [
        "Développement d’une application mobile de gestion de restaurant (commandes, stocks, réservations, paiements).",
        "Intégration d’un système de recommandation basé sur l’apprentissage automatique : satisfaction client augmentée jusqu’à 90 %.",
        "Collaboration produit pour relier besoins métier, UX et composantes IA.",
      ],
      case: {
        problem:
          "Digitaliser la gestion opérationnelle d’un restaurant et améliorer l’expérience utilisateur via des recommandations personnalisées.",
        approach: [
          "Conception des fonctionnalités clés (commandes, stocks, réservations, paiements) et structuration des données.",
          "Développement front/back (Angular/Laravel) et intégration d’un module ML de recommandation.",
          "Tests fonctionnels et itérations produit pour améliorer l’adoption et la satisfaction.",
        ],
        impact: [
          "Solution opérationnelle couvrant la gestion end-to-end du restaurant.",
          "Amélioration de la satisfaction client (jusqu’à 90 %) via recommandations personnalisées.",
        ],
        stack: ["Angular", "Laravel", "Scikit-learn"],
      },
    },
  ],
  []
);


  const education = useMemo(
    () => [
      {
        period: "2025 – 2027",
        school: "Université Catholique de Lille",
        diploma: "Master Data & IA",
        place: "Lille, France",
      },
      {
        period: "2024 – 2025",
        school: "Grenoble INP - Ensimag & Université Grenoble Alpes",
        diploma: "Master 1 MoSIG (Master of Science in Informatics at Grenoble)",
        place: "Grenoble, France",
      },
      {
        period: "2023 – 2024",
        school: "Université de Dschang",
        diploma: "Master 1 en Intelligence Artificielle",
        place: "Dschang, Cameroun",
      },
      {
        period: "2020 – 2023",
        school: "Université de Dschang",
        diploma: "Licence en Informatique",
        place: "Dschang, Cameroun",
      },
    ],
    []
  );

  const certifications = useMemo(
    () => [
      { title: "IBM Data Science Professional Certificate", year: "2026" },
      { title: "Machine Learning Specialization (Andrew Ng)", year: "En cours" },
      { title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", year: "En cours" },
    ],
    []
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const GridBG = () => (
    <div className="absolute inset-0 -z-10">
      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-[linear-gradient(to_bottom,#020617,#020617)]"
            : "bg-[linear-gradient(to_bottom,#ffffff,#f8fafc)]"
        }`}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'><g fill='none' stroke='rgba(148,163,184,0.18)' stroke-width='1'><path d='M0 18H36'/><path d='M18 0V36'/></g></svg>)",
        }}
      />
    </div>
  );

  const Particles = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(24)].map((_, i) => (
        <motion.span
          key={i}
          className={`absolute h-1.5 w-1.5 rounded-full ${
            dark ? "bg-yellow-300/80" : "bg-amber-400/80"
          } shadow-[0_0_12px_rgba(234,179,8,0.9)]`}
          style={{
            left: `${(i * 41) % 100}%`,
            top: `${(i * 17) % 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            x: [0, 6, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 3.2 + (i % 5), repeat: Infinity }}
        />
      ))}
    </div>
  );

  const NeuralGraph = () => (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 420"
      preserveAspectRatio="none"
    >
      {[...Array(18)].map((_, i) => (
        <motion.line
          key={`l-${i}`}
          x1={(i * 60) % 1200}
          y1={40 + (i % 6) * 25}
          x2={(i * 120) % 1200}
          y2={360 - (i % 6) * 25}
          stroke={dark ? "#facc15" : "#eab308"}
          strokeWidth="0.6"
          strokeOpacity={dark ? 0.45 : 0.35}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.5 + (i % 6),
            delay: i * 0.05,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      {[...Array(30)].map((_, i) => (
        <motion.circle
          key={`c-${i}`}
          cx={(i * 37) % 1200}
          cy={70 + ((i * 19) % 300)}
          r={2}
          fill={dark ? "#facc15" : "#eab308"}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.85, 0.2] }}
          transition={{ duration: 2.4 + (i % 5), repeat: Infinity }}
        />
      ))}
    </svg>
  );

  const [openCase, setOpenCase] = useState<null | string>(null);
  const selected = projects.find((p) => p.slug === openCase) || null;

  const [openExpCase, setOpenExpCase] = useState<null | string>(null);
  const selectedExp = experience.find((e) => e.slug === openExpCase) || null;


  const Section = ({ title, items }: { title: string; items: string[] }) => (
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <ul className="list-disc pl-5 space-y-1">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );

  const CaseStudy = () =>
    selected ? (
      <div className="fixed inset-0 z-[60] grid place-items-center p-4">
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpenCase(null)}
        />
        <Card
          className={`relative max-w-3xl w-full rounded-2xl overflow-hidden ${
            dark
              ? "bg-slate-950 border-slate-800 text-slate-100"
              : "bg-white border-slate-200 text-slate-900"
          }`}
        >
          <CardHeader>
            <CardTitle className="text-xl">{selected.title}</CardTitle>
            <p className="text-sm opacity-70 mt-1">Case study</p>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <Section title="Problème" items={[selected.case.problem]} />
            <Section title="Approche" items={selected.case.approach} />
            <Section title="Impact" items={selected.case.impact} />
            <Section title="Stack" items={selected.case.stack} />
            <div className="pt-2">
              <Button onClick={() => setOpenCase(null)} className="rounded-2xl">
                Fermer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    ) : null;

  const ExperienceCaseStudy = () =>
  selectedExp ? (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setOpenExpCase(null)}
      />
      <Card
        className={`relative max-w-3xl w-full rounded-2xl overflow-hidden ${
          dark
            ? "bg-slate-950 border-slate-800 text-slate-100"
            : "bg-white border-slate-200 text-slate-900"
        }`}
      >
        <CardHeader>
          <CardTitle className="text-xl">
            {selectedExp.role} — {selectedExp.company}
          </CardTitle>
          <p className="text-sm opacity-70 mt-1">
            {selectedExp.period} · {selectedExp.location}
          </p>
        </CardHeader>


        <CardContent className="space-y-4 text-sm">
          <Section title="Problème" items={[selectedExp.case.problem]} />
          <Section title="Approche" items={selectedExp.case.approach} />
          <Section title="Impact" items={selectedExp.case.impact} />
          <Section title="Stack" items={selectedExp.case.stack} />

          <div className="pt-2">
            <Button
              onClick={() => setOpenExpCase(null)}
              className="rounded-2xl"
            >
              Fermer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ) : null;


  return (
    <div className={dark ? "dark" : ""}>
      <div
        className={`relative min-h-screen ${
          dark ? "text-slate-100 bg-slate-950" : "text-slate-900 bg-slate-50"
        }`}
      >
        <GridBG />

        {/* HEADER */}
        <header
          className={`sticky top-0 z-50 backdrop-blur border-b ${
            dark
              ? "bg-slate-950/75 border-slate-800"
              : "bg-white/70 border-slate-200"
          }`}
        >
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_14px_rgba(234,179,8,0.9)]" />
              <span className="font-semibold tracking-tight">
                {contact.name}
              </span>
              <span className="hidden sm:inline text-xs text-slate-400 dark:text-slate-500">
                Data & IA
              </span>
            </div>
            <nav className="flex items-center gap-2 sm:gap-3">
              {["#projects", "#skills", "#experience", "#contact"].map(
                (href, idx) => {
                  const config = [
                    { label: "Projets", icon: Rocket },
                    { label: "Compétences", icon: Star },
                    { label: "Expérience", icon: Briefcase },
                    { label: "Contact", icon: ArrowRight },
                  ][idx];
                  const Icon = config.icon;
                  return (
                    <Button
                      key={href}
                      asChild
                      variant={config.label === "Contact" ? "default" : "secondary"}
                      className={`rounded-2xl ${
                        config.label === "Contact"
                          ? "bg-yellow-400 text-black hover:bg-yellow-300"
                          : ""
                      }`}
                      size="sm"
                    >
                      <a href={href}>
                        <Icon className="h-4 w-4 mr-2" />
                        {config.label}
                      </a>
                    </Button>
                  );
                }
              )}
              <Button
                asChild
                variant="ghost"
                className="rounded-full hidden sm:inline-flex"
                size="sm"
              >
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="rounded-full hidden sm:inline-flex"
                size="sm"
              >
                <a href={contact.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                onClick={toggleTheme}
                variant="outline"
                className="rounded-2xl"
                size="sm"
              >
                {dark ? (
                  <Sun className="h-4 w-4 mr-2" />
                ) : (
                  <Moon className="h-4 w-4 mr-2" />
                )}
                {dark ? "Light" : "Dark"}
              </Button>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section className="relative">
          <div className="relative h-56 sm:h-64 overflow-hidden">
            <Particles />
            <NeuralGraph />
          </div>
          <div className="mx-auto max-w-6xl px-4 -mt-14 pb-8">
            <Card
              className={`rounded-2xl shadow-lg ${
                dark
                  ? "border-slate-800 bg-slate-950/90"
                  : "border-slate-200 bg-white/90"
              } backdrop-blur`}
            >
              <CardContent className="p-6 sm:p-8 grid md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-3 space-y-3">
                  <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                    {contact.title}
                  </h1>
                  <p className="text-sm sm:text-base text-yellow-300">
                    {contact.subtitle}
                  </p>
                  <p
                    className={`mt-2 max-w-2xl text-sm sm:text-[0.95rem] ${
                      dark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {contact.pitch}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <motion.div
                      whileHover={{ scale: 1.03 }}>
                      <Button
                        asChild
                        className="rounded-2xl bg-yellow-400 text-black hover:bg-yellow-300"
                      >
                        <a href={contact.cvUrl} download>
                          <Download className="h-4 w-4 mr-2" />
                          CV (PDF)
                        </a>
                      </Button>
                    </motion.div>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-2xl border-slate-500 text-slate-100"
                    >
                      <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      className="rounded-2xl text-slate-200"
                    >
                      <a
                        href={contact.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                  <div
                    className={`mt-3 text-sm flex flex-wrap gap-4 ${
                      dark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-6 w-6" /> {contact.availability}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> {contact.location}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="mb-2 text-xs uppercase tracking-[0.16em] text-slate-400">
                    Stack & terrains de jeu
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Java",
                      "C",
                      "R",
                      "SQL",
                      "scikit-learn",
                      "TensorFlow",
                      "PyTorch",
                      "Matplotlib",
                      "Seaborn",
                      "Git/Github",
                      "Docker",
                      "Kubernetes",
                      "CI/CD",
                      "PostgreSQL",
                      "NoSQL",
                      "Power BI",
                      "Linux",
                    ].map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-full text-xs border ${
                          dark
                            ? "bg-slate-900 border-slate-700 text-yellow-300"
                            : "bg-amber-50 border-amber-200 text-amber-900"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* EXPERIENCE */}
        <section
          id="experience"
          className="mx-auto max-w-6xl px-4 mt-10 sm:mt-14"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">Expériences</h2>
          <div className="mt-6 space-y-4">
            {experience.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card
                  className={`rounded-2xl ${
                    dark
                      ? "bg-slate-950 border-slate-800"
                      : "bg-white border-slate-200"
                  } hover:shadow-lg transition`}
                >
                  <CardHeader className="pb-2">
                    <div
                      className={`text-sm flex items-center gap-2 ${
                        dark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      <Briefcase className="h-4 w-4" />
                      <span>{e.period}</span>
                    </div>
                    <CardTitle className="text-lg">
                      {e.role} —{" "}
                      <span className="text-yellow-300">{e.company}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className={`pt-0 text-sm ${
                      dark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    <ul className="list-disc pl-5 space-y-1">
                      {e.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>

                    <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-xl border-slate-600"
                      onClick={() => setOpenExpCase(e.slug)}
                    >
                      Voir le case study
                    </Button>

                    {e.link && (
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="rounded-xl text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
                    >
                      <a
                        href={e.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Site
                      </a>
                    </Button>
                  )}
                  </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="mx-auto max-w-6xl px-4 mt-10 sm:mt-14"
        >
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Projets</h2>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card
                  className={`group rounded-2xl relative overflow-hidden ${
                    dark
                      ? "bg-slate-950 border-slate-800"
                      : "bg-white border-slate-200"
                  } hover:border-yellow-400 transition`}
                >
                  <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg bg-gradient-to-r from-yellow-300/30 via-transparent to-yellow-300/30 transition" />
                  <CardHeader className="pb-2 relative">
                    <div
                      className={`flex items-center justify-between text-xs ${
                        dark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {p.year}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className={`rounded-md text-[10px] px-2 py-0.5 border ${
                              dark
                                ? "bg-slate-900 border-slate-700 text-yellow-300"
                                : "bg-amber-50 text-amber-900 border-amber-200"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <CardTitle className="leading-snug mt-1">
                      {p.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className={`text-sm relative ${
                      dark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    <p>{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-xl border-slate-600"
                        onClick={() => setOpenCase(p.slug)}
                      >
                        Voir le case study
                      </Button>

                      {p.Url && (
                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="rounded-xl text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
                        >
                          <a href={p.Url} target="_blank" rel="noreferrer">
                            Voir le projet 
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMPETENCES */}
        <section id="skills" className="mx-auto max-w-6xl px-4 mt-8 sm:mt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-300" />
            Compétences
          </h2>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <Card
              className={
                dark
                  ? "bg-slate-950 border-slate-800"
                  : "bg-white border-slate-200"
              }
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Data Science & ML</CardTitle>
              </CardHeader>
              <CardContent
                className={dark ? "text-slate-300" : "text-slate-700"}
              >
                <ul className="list-disc pl-4 space-y-1">
                  <li>Machine Learning supervisé / non supervisé</li>
                  <li>Régression, classification, clustering</li>
                  <li>Feature engineering & sélection de variables</li>
                  <li>Métriques (RMSE, MSE, F1 …)</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={
                dark
                  ? "bg-slate-950 border-slate-800"
                  : "bg-white border-slate-200"
              }
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">IA & NLP</CardTitle>
              </CardHeader>
              <CardContent
                className={dark ? "text-slate-300" : "text-slate-700"}
              >
                <ul className="list-disc pl-4 space-y-1">
                  <li>Deep Learning, réseaux de neurones</li>
                  <li>NLP (classification, embeddings, texte)</li>
                  <li>LLM, RAG, Vision-Language Models</li>
                  <li>Time Series & prévision</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={
                dark
                  ? "bg-slate-950 border-slate-800"
                  : "bg-white border-slate-200"
              }
            >
              <CardHeader className="pb-2">
              <CardTitle className="text-sm">BI & Outils Data</CardTitle>
              </CardHeader>
              <CardContent className={dark ? "text-slate-300" : "text-slate-700"}>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Power BI : Dashboards, KPIs, reporting & data storytelling</li>
                  <li>Visualisation de données : Plotly</li>
                  <li>Versioning & collaboration : Git, GitHub</li>
                  <li>Environnements Data : Jupyter, VS Code, PyCharm</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={
                dark
                  ? "bg-slate-950 border-slate-800"
                  : "bg-white border-slate-200"
              }
            >
              <CardHeader className="pb-2">
              <CardTitle className="text-sm">Développement Web & Mobile</CardTitle>
              </CardHeader>
              <CardContent className={dark ? "text-slate-300" : "text-slate-700"}>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Développement d’APIs et services backend</li>
                  <li>Applications web & mobiles (Angular, Laravel)</li>
                  <li>Gestion des données : PostgreSQL, SQL</li>
                  <li>Intégration de modules IA dans des applications</li>
                </ul>
              </CardContent>
            </Card>

            
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className="mx-auto max-w-6xl px-4 mt-10 sm:mt-14"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">Formation</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
            {education.map((ed, i) => (
              <motion.div
                key={i}
                className="h-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card
                  className={`rounded-2xl h-full flex flex-col ${
                    dark
                      ? "bg-slate-950 border-slate-800"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <CardHeader className="pb-2">
                    <div
                      className={`text-sm flex items-center gap-2 ${
                        dark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      <GraduationCap className="h-4 w-4" />
                      <span>{ed.period}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {ed.diploma}
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className={`pt-0 text-sm ${
                      dark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    <p className="font-medium">{ed.school}</p>
                    <p
                      className={
                        dark ? "text-slate-400" : "text-slate-600"
                      }
                    >
                      {ed.place}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT & VALUE */}
        <section className="mx-auto max-w-6xl px-4 mt-10 sm:mt-12">
          <div className="grid lg:grid-cols-[2fr,3fr] gap-4">
            <Card
              className={
                dark
                  ? "bg-slate-950 border-slate-800"
                  : "bg-white border-slate-200"
              }
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="h-5 w-5 text-yellow-400" />
                  À propos & vision
                </CardTitle>
              </CardHeader>
              <CardContent
                className={`pt-0 text-sm space-y-2 ${
                  dark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                <p>
                  Ce qui m’intéresse dans la Data et IA, ce n’est pas
                  seulement de faire tourner des modèles, mais de{" "}
                  <span className="text-yellow-300">
                    transformer la complexité en décisions claires
                  </span>{" "}
                  qui aident vraiment quelqu’un : une équipe, un client, un
                  utilisateur.
                </p>
                <p>
                  Avec un parcours entre le Cameroun et la France, j’apporte une
                  vision multiculturelle, beaucoup de persévérance et une vraie
                  sensibilité aux enjeux concrets derrière les données.
                </p>
                <p>
                  Mon ambition : contribuer à des projets où l’IA reste{" "}
                  <span className="text-yellow-300">
                    utile, explicable et centrée sur l’humain
                  </span>
                  .
                </p>
              </CardContent>
            </Card>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid sm:grid-cols-3 gap-4"
            >
              {[
                {
                  icon: <Rocket className="h-5 w-5" />,
                  title: "Du notebook à la prod",
                  text: "APIs, conteneurs, CI/CD et bonnes pratiques pour des modèles qui vivent en production.",
                },
                {
                  icon: <Award className="h-5 w-5" />,
                  title: "Rigueur & métriques",
                  text: "Suivi de la performance, validation sérieuse et reproductibilité des expériences.",
                },
                {
                  icon: <Star className="h-5 w-5" />,
                  title: "Esprit produit",
                  text: "Data storytelling, KPIs métier et souci constant de l’impact pour les utilisateurs.",
                },
              ].map((b, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -2 }}>
                  <Card
                    className={`rounded-2xl h-full ${
                      dark
                        ? "bg-slate-950 border-slate-800"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                      <span className="text-yellow-300">{b.icon}</span>
                      <CardTitle className="text-sm">{b.title}</CardTitle>
                    </CardHeader>
                    <CardContent
                      className={`pt-0 text-xs sm:text-sm ${
                        dark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {b.text}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section
          id="certs"
          className="mx-auto max-w-6xl px-4 mt-10 sm:mt-14"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
            <Award className="h-6 w-6 text-yellow-300" />
            Certifications
          </h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {certifications.map((c, i) => (
              <Card
                key={i}
                className={`rounded-2xl ${
                  dark
                    ? "bg-slate-950 border-slate-800"
                    : "bg-white border-slate-200"
                }`}
              >
                <CardHeader className="pb-1">
                  <CardTitle className="text-base">{c.title}</CardTitle>
                </CardHeader>
                <CardContent
                  className={`pt-0 text-sm ${
                    dark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {c.year}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-6xl px-4 mt-10 sm:mt-14 mb-20"
        >
          <Card
            className={`relative overflow-hidden rounded-2xl border ${
              dark
                ? "from-slate-950 to-slate-900 border-slate-800 bg-gradient-to-br"
                : "from-amber-50 to-white border-amber-200 bg-gradient-to-br"
            }`}
          >
            <div className="absolute inset-0 opacity-35 bg-[radial-gradient(50%_50%_at_0%_0%,rgba(234,179,8,0.25),transparent_60%),radial-gradient(50%_50%_at_100%_100%,rgba(250,204,21,0.25),transparent_60%)]" />
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl relative">
                On construit votre prochain produit Data ?
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6 items-center relative">
              <div
                className={`text-sm ${
                  dark ? "text-slate-200" : "text-slate-800"
                }`}
              >
                Passionné par la transformation des données en leviers de croissance. Actuellement en quête d'une alternance de 12 mois pour mon Master 2 dès septembre 2026, sur un rythme de 3 jours en entreprise et 2 jours à l'école.
              </div>
              <div className="grid gap-3 text-sm">
                <a
                  href={`mailto:${contact.email}`}
                  className={`inline-flex items-center gap-2 p-3 rounded-xl border transition ${
                    dark
                      ? "bg-slate-950 border-slate-800 hover:bg-slate-900"
                      : "bg-white border-amber-200 hover:bg-amber-50"
                  }`}
                >
                  <Mail className="h-4 w-4" /> {contact.email}
                </a>
                <a
                  href={`tel:${contact.phone.split(" ").join("")}`}
                  className={`inline-flex items-center gap-2 p-3 rounded-xl border transition ${
                    dark
                      ? "bg-slate-950 border-slate-800 hover:bg-slate-900"
                      : "bg-white border-amber-200 hover:bg-amber-50"
                  }`}
                >
                  <Phone className="h-4 w-4" /> {contact.phone}
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 p-3 rounded-xl border transition ${
                    dark
                      ? "bg-slate-950 border-slate-800 hover:bg-slate-900"
                      : "bg-white border-amber-200 hover:bg-amber-50"
                  }`}
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 p-3 rounded-xl border transition ${
                    dark
                      ? "bg-slate-950 border-slate-800 hover:bg-slate-900"
                      : "bg-white border-amber-200 hover:bg-amber-50"
                  }`}
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <div
                  className={`inline-flex items-center gap-2 p-3 rounded-xl border ${
                    dark
                      ? "bg-slate-950 border-slate-800"
                      : "bg-white border-amber-200"
                  }`}
                >
                  <MapPin className="h-4 w-4" /> {contact.location}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FOOTER */}
        <footer
          className={`border-t ${
            dark ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <div
            className={`mx-auto max-w-6xl px-4 py-8 text-xs flex flex-wrap items-center justify-between gap-4 ${
              dark ? "text-slate-500" : "text-slate-600"
            }`}
          >
            <div>
              © {new Date().getFullYear()} {contact.name}.
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={contact.cvUrl} className="hover:opacity-100">
                CV (PDF)
              </a>
              <a href="#projects" className="hover:opacity-100">
                Projets
              </a>
              <a href="#contact" className="hover:opacity-100">
                Contact
              </a>
            </div>
          </div>
        </footer>

        <CaseStudy />
        <ExperienceCaseStudy />
      </div>
    </div>
  );
}
