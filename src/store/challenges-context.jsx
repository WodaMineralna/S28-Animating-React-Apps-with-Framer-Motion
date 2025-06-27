import { createContext, useState } from "react";

const PLACEHOLDER_CHALLANGES = [
  {
    title: "Test Challange 1",
    description: "Test Text",
    status: "active",
    id: 123123123,
    deadline: "2025-02-06",
    image: {
      src: "/src/assets/playing-guitar.png",
      alt: "Person playing the guitar.",
    },
  },
  {
    title: "RAAAAHHHH",
    description: "Lorem ipsum!!!!",
    status: "completed",
    id: 53231123,
    deadline: "2025-08-06",
    image: {
      src: "/src/assets/cooking.png",
      alt: "idk vro.",
    },
  },
];

export const ChallengesContext = createContext({
  challenges: [],
  addChallenge: () => {},
  updateChallengeStatus: () => {},
});

export default function ChallengesContextProvider({ children }) {
  const [challenges, setChallenges] = useState(PLACEHOLDER_CHALLANGES);

  function addChallenge(challenge) {
    setChallenges((prevChallenges) => [
      { ...challenge, id: Math.random().toString(), status: "active" },
      ...prevChallenges,
    ]);
  }

  function deleteChallenge(challengeId) {
    setChallenges((prevChallenges) =>
      prevChallenges.filter((challenge) => challenge.id !== challengeId)
    );
  }

  function updateChallengeStatus(challengeId, newStatus) {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      })
    );
  }

  const challengesContext = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
  };

  return (
    <ChallengesContext.Provider value={challengesContext}>
      {children}
    </ChallengesContext.Provider>
  );
}
