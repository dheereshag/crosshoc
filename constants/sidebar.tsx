import {
  TerminalSquareIcon,
  BotIcon,
  LifeBuoyIcon,
  SendIcon,
  PieChartIcon,
  CalendarDaysIcon,
  CalendarIcon,
  CalendarClockIcon,
  TrophyIcon,
  TrendingUpIcon,
  ListOrderedIcon,
  SwordsIcon,
  BrainIcon,
  ScrollIcon,
  CrosshairIcon,
  CompassIcon,
  PuzzleIcon,
  CarIcon,
  DumbbellIcon,
  CpuIcon,
  SmileIcon,
  SparklesIcon,
  Gamepad2Icon,
  ZapIcon,
} from "lucide-react";

export const genreIconComponents = {
  Action: SwordsIcon,
  Strategy: BrainIcon,
  RPG: ScrollIcon,
  Shooter: CrosshairIcon,
  Adventure: CompassIcon,
  Puzzle: PuzzleIcon,
  Racing: CarIcon,
  Sports: DumbbellIcon,
  Simulation: CpuIcon,
  Casual: SmileIcon,
  Indie: SparklesIcon,
  Platformer: Gamepad2Icon,
  Arcade: ZapIcon,
} as const;

export const genreIconMap = {
  Action: <SwordsIcon />,
  Strategy: <BrainIcon />,
  RPG: <ScrollIcon />,
  Shooter: <CrosshairIcon />,
  Adventure: <CompassIcon />,
  Puzzle: <PuzzleIcon />,
  Racing: <CarIcon />,
  Sports: <DumbbellIcon />,
  Simulation: <CpuIcon />,
  Casual: <SmileIcon />,
  Indie: <SparklesIcon />,
  Platformer: <Gamepad2Icon />,
  Arcade: <ZapIcon />,
} as const;

export const sidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://picsum.photos/seed/crosshoc-user/64/64",
  },
  navMain: [
    {
      title: "New Releases",
      url: "/?section=new",
      icon: <TerminalSquareIcon />,
      isActive: true,
      items: [
        {
          title: "Last 30 days",
          url: "/?section=new&range=30d",
          icon: <CalendarDaysIcon />,
        },
        {
          title: "This week",
          url: "/?section=new&range=week",
          icon: <CalendarIcon />,
        },
        {
          title: "Next week",
          url: "/?section=new&range=next",
          icon: <CalendarClockIcon />,
        },
        {
          title: "Release calendar",
          url: "/?section=new&range=calendar",
          icon: <CalendarIcon />,
        },
      ],
    },
    {
      title: "Top",
      url: "/?section=top",
      icon: <PieChartIcon />,
      items: [
        {
          title: "Best of the year",
          url: "/?section=top&metric=year",
          icon: <TrophyIcon />,
        },
        {
          title: "Popular in 2025",
          url: "/?section=top&metric=2025",
          icon: <TrendingUpIcon />,
        },
        {
          title: "All time top 250",
          url: "/?section=top&metric=all-time",
          icon: <ListOrderedIcon />,
        },
      ],
    },
    {
      title: "Genres",
      url: "/?section=genres",
      icon: <BotIcon />,
      items: [
        { title: "Action", url: "/?genre=Action", icon: <SwordsIcon /> },
        { title: "Strategy", url: "/?genre=Strategy", icon: <BrainIcon /> },
        { title: "RPG", url: "/?genre=RPG", icon: <ScrollIcon /> },
        { title: "Shooter", url: "/?genre=Shooter", icon: <CrosshairIcon /> },
        { title: "Adventure", url: "/?genre=Adventure", icon: <CompassIcon /> },
        { title: "Puzzle", url: "/?genre=Puzzle", icon: <PuzzleIcon /> },
        { title: "Racing", url: "/?genre=Racing", icon: <CarIcon /> },
        { title: "Sports", url: "/?genre=Sports", icon: <DumbbellIcon /> },
        { title: "Simulation", url: "/?genre=Simulation", icon: <CpuIcon /> },
        { title: "Casual", url: "/?genre=Casual", icon: <SmileIcon /> },
        { title: "Indie", url: "/?genre=Indie", icon: <SparklesIcon /> },
        {
          title: "Platformer",
          url: "/?genre=Platformer",
          icon: <Gamepad2Icon />,
        },
        { title: "Arcade", url: "/?genre=Arcade", icon: <ZapIcon /> },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/?section=support",
      icon: <LifeBuoyIcon />,
    },
    {
      title: "Feedback",
      url: "/?section=feedback",
      icon: <SendIcon />,
    },
  ],
};