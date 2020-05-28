export const loadLists = () => [
  {
    title: "Todo",
    creatable: true,
    cards: [
      {
        id: 1,
        content: "User can reset password",
        labels: ["#21a577"],
        tags: ["New feature"],
        user: "https://api.adorable.io/avatars/24/al",
      },
    ],
  },
  {
    title: "Development",
    creatable: false,
    cards: [
      {
        id: 2,
        content: "Add company section",
        labels: ["#7159c1"],
        tags: ["Enhance UX"],
        user: "https://api.adorable.io/avatars/24/ald",
      },
      {
        id: 3,
        content: "Add company section",
        labels: ["#7159c1"],
        tags: ["Enhance UX"],
        user: "https://api.adorable.io/avatars/24/ald",
      },
      {
        id: 9,
        content: "Add search section",
        labels: ["#7159c1"],
        tags: ["Enhance UX"],
        user: "https://api.adorable.io/avatars/24/ald",
      },
    ],
  },
  {
    title: "Paused",
    creatable: false,
    cards: [
      {
        id: 4,
        content: "Update legacy code",
        labels: ["#7159c1"],
        tags: ["Performance"],
        user: "https://api.adorable.io/avatars/24/ald",
      },
    ],
  },
  {
    title: "Waiting Review",
    creatable: false,
    cards: [
      {
        id: 5,
        content: "User can filter cards by tag",
        labels: ["#7159c1"],
        tags: ["New Feature"],
        user: "https://api.adorable.io/avatars/24/ald",
      },
    ],
  },
  {
    title: "Merged",
    done: true,
    creatable: false,
    cards: [
      {
        id: 6,
        content: "Fix button overlay",
        labels: ["#7159c1"],
        tags: ["Bug"],
        user: "https://api.adorable.io/avatars/24/erl",
      },
      {
        id: 7,
        content: "User can login to dashboard",
        labels: ["#7159c1"],
        tags: ["New Feature"],
        user: "https://api.adorable.io/avatars/24/ab",
      },
    ],
  },
];
