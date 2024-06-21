export const surveyQuestions = [
    {
      id: 1,
      text: "How would you rate our service?",
      type: "Rating",
      options: ["Very Bad", "Bad", "Neutral", "Good", "Very Good"],
      required: true
    },
    {
      id: 2,
      text: "What did you like most about our service?",
      type: "Text",
      required: true
    },
    {
      id: 3,
      text: "Would you recommend our service to others?",
      type: "Multiple Choice",
      options: ["Yes", "No"],
      required: true
    },
    {
      id: 4,
      text: "Please rate the cleanliness of our facilities.",
      type: "Rating",
      options: ["Very Bad", "Bad", "Neutral", "Good", "Very Good"],
      required: true
    },
    {
      id: 5,
      text: "Any other comments or suggestions?",
      type: "Text",
      required: false
    },
    {
      id: 6,
      text: "How satisfied are you with our customer support?",
      type: "Rating",
      options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"],
      required: true
    },
    {
      id: 7,
      text: "How likely are you to use our service again?",
      type: "Rating",
      options: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
      required: true
    },
    {
      id: 8,
      text: "What can we improve?",
      type: "Text",
      required: false
    },
    {
      id: 9,
      text: "How do you prefer to contact us?",
      type: "Multiple Choice",
      options: ["Phone", "Email", "Chat"],
      required: true
    },
    {
      id: 10,
      text: "Any additional feedback?",
      type: "Text",
      required: false
    }
  ];