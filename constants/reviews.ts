import type { Game } from "@/constants/catalog";

export type Review = {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  postedOn: string;
  comment: string;
};

type ReviewTemplate = {
  author: string;
  avatar: string;
  postedOn: string;
  comment: string;
  ratingDelta: number;
};

const reviewTemplates: ReviewTemplate[] = [
  {
    author: "Alex",
    avatar: "https://picsum.photos/seed/reviewer-alex/64/64",
    postedOn: "2026-05-12",
    comment:
      "Great lease value for the quality. Performance stayed stable even in longer sessions.",
    ratingDelta: 0,
  },
  {
    author: "Priya",
    avatar: "https://picsum.photos/seed/reviewer-priya/64/64",
    postedOn: "2026-04-28",
    comment:
      "Loved the core gameplay loop. Would like a few more progression options, but still highly recommend.",
    ratingDelta: -0.4,
  },
  {
    author: "Jordan",
    avatar: "https://picsum.photos/seed/reviewer-jordan/64/64",
    postedOn: "2026-04-10",
    comment: "Visual style and controls are excellent. Easy to jump in and play without friction.",
    ratingDelta: 0.2,
  },
  {
    author: "Nina",
    avatar: "https://picsum.photos/seed/reviewer-nina/64/64",
    postedOn: "2026-03-29",
    comment: "Smooth onboarding and polished presentation. Co-op sessions were especially fun.",
    ratingDelta: -0.1,
  },
  {
    author: "Mateo",
    avatar: "https://picsum.photos/seed/reviewer-mateo/64/64",
    postedOn: "2026-03-12",
    comment: "The pacing stays engaging, and the controls feel responsive throughout.",
    ratingDelta: 0.1,
  },
  {
    author: "Sana",
    avatar: "https://picsum.photos/seed/reviewer-sana/64/64",
    postedOn: "2026-02-25",
    comment: "Very replayable with different styles. Worth leasing for a longer term.",
    ratingDelta: 0.3,
  },
];

export function getReviewsForGame(game: Game): Review[] {
  return reviewTemplates.map((review, index) => {
    const adjustedRating = Math.max(
      6.8,
      Math.min(10, Number((game.rating + review.ratingDelta).toFixed(1))),
    );

    return {
      id: `${game.id}-${index + 1}`,
      author: review.author,
      avatar: review.avatar,
      postedOn: review.postedOn,
      comment: review.comment,
      rating: adjustedRating,
    };
  });
}
