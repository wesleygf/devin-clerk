export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "What to do",
  description:
    "It's an app that lets you add activities like eat so you can add restaurants, fun so you can add climbing parks, things to watch so you can add movies or series, so you and your partner or friends add to the list and the app will decide.",
  emoji: "🎲",
  accent: "#f43f5e",
  upcomingFeatures: [
    {
      title: "Activity categories",
      description: "Create categories like Eat, Fun and Watch.",
    },
    {
      title: "Add ideas",
      description:
        "Save restaurants, climbing parks, movies or series to a category.",
    },
    {
      title: "Shared lists",
      description: "Invite your partner or friends to add to the same list.",
    },
    {
      title: "Decide for us",
      description: "Let the app pick a random idea from a category.",
    },
    {
      title: "Veto and re-roll",
      description: "Skip a pick you don't like and draw again.",
    },
    {
      title: "Decision history",
      description: "See past picks so you can avoid repeats.",
    },
  ] satisfies Feature[],
};
