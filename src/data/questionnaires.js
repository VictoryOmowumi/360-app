// a list of questionnaires that include assessment questions and survey questions
export const questionnaires = [
    {
      "id": 1,
      "title": "Employee Satisfaction Survey",
      "description": "A survey to gauge employee satisfaction across various dimensions.",
      "type": "Survey",
      "questions": [
        {
          "id": 101,
          "text": "How satisfied are you with your current job role?",
          "type": "Multiple Choice",
          "options": ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
          "answer": "Satisfied"
        },
        {
          "id": 102,
          "text": "What do you like the most about your job?",
          "type": "Text",
          "options": [],
          "answer": "The team environment."
        }
      ],
      "createdAt": "2023-01-15T10:30:00Z",
      "createdBy": "Jane Doe"
    },
    {
      "id": 2,
      "title": "Product Feedback",
      "description": "Collecting feedback on the latest product release.",
      "type": "Assessment",
      "questions": [
        {
          "id": 103,
          "text": "How would you rate the product quality?",
          "type": "Rating",
          "options": [1, 2, 3, 4, 5],
          "answer": 4
        },
        {
          "id": 104,
          "text": "What improvements would you suggest?",
          "type": "Text",
          "options": [],
          "answer": "Better user interface."
        }
      ],
      "createdAt": "2023-02-20T14:45:00Z",
      "createdBy": "John Smith"
    },
    {
      "id": 3,
      "title": "Customer Satisfaction Survey",
      "description": "Survey to understand customer satisfaction levels.",
      "type": "Survey",
      "questions": [
        {
          "id": 105,
          "text": "How likely are you to recommend our product to a friend?",
          "type": "Multiple Choice",
          "options": ["Very Likely", "Likely", "Neutral", "Unlikely", "Very Unlikely"],
          "answer": "Very Likely"
        },
        {
          "id": 106,
          "text": "Please provide any additional comments.",
          "type": "Text",
          "options": [],
          "answer": "Great product!"
        }
      ],
      "createdAt": "2023-03-05T09:20:00Z",
      "createdBy": "Alice Johnson"
    },
    {
      "id": 4,
      "title": "Training Needs Assessment",
      "description": "Assessment to identify training needs of employees.",
      "type": "Assessment",
      "questions": [
        {
          "id": 107,
          "text": "Which skills do you feel you need to improve?",
          "type": "Text",
          "options": [],
          "answer": "Time management."
        },
        {
          "id": 108,
          "text": "How would you rate your current skill level?",
          "type": "Rating",
          "options": [1, 2, 3, 4, 5],
          "answer": 3
        }
      ],
      "createdAt": "2023-04-10T11:15:00Z",
      "createdBy": "David Brown"
    },
    {
      "id": 5,
      "title": "Market Research Survey",
      "description": "Survey to gather market research data.",
      "type": "Survey",
      "questions": [
        {
          "id": 109,
          "text": "Which of the following products do you use?",
          "type": "Checkbox",
          "options": ["Product A", "Product B", "Product C", "Product D"],
          "answer": ["Product A", "Product C"]
        },
        {
          "id": 110,
          "text": "How would you rate the price of our product?",
          "type": "Rating",
          "options": [1, 2, 3, 4, 5],
          "answer": 4
        }
      ],
      "createdAt": "2023-05-22T16:00:00Z",
      "createdBy": "Emma Wilson"
    },
    {
      "id": 6,
      "title": "Employee Performance Review",
      "description": "Review to assess employee performance.",
      "type": "Assessment",
      "questions": [
        {
          "id": 111,
          "text": "How do you rate the employee's productivity?",
          "type": "Rating",
          "options": [1, 2, 3, 4, 5],
          "answer": 5
        },
        {
          "id": 112,
          "text": "What are the employee's strengths?",
          "type": "Text",
          "options": [],
          "answer": "Excellent communication skills."
        }
      ],
      "createdAt": "2023-06-18T08:30:00Z",
      "createdBy": "Michael Clark"
    },
    {
      "id": 7,
      "title": "Health and Wellness Survey",
      "description": "Survey to assess health and wellness of employees.",
      "type": "Survey",
      "questions": [
        {
          "id": 113,
          "text": "How often do you exercise?",
          "type": "Multiple Choice",
          "options": ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
          "answer": "Weekly"
        },
        {
          "id": 114,
          "text": "What is your preferred exercise activity?",
          "type": "Text",
          "options": [],
          "answer": "Running."
        }
      ],
      "createdAt": "2023-07-12T10:10:00Z",
      "createdBy": "Sophia Lewis"
    },
    {
      "id": 8,
      "title": "Customer Service Feedback",
      "description": "Feedback survey for customer service interactions.",
      "type": "Survey",
      "questions": [
        {
          "id": 115,
          "text": "How satisfied are you with our customer service?",
          "type": "Multiple Choice",
          "options": ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
          "answer": "Very Satisfied"
        },
        {
          "id": 116,
          "text": "What can we do to improve our customer service?",
          "type": "Text",
          "options": [],
          "answer": "Continue providing quick responses."
        }
      ],
      "createdAt": "2023-08-03T13:25:00Z",
      "createdBy": "Olivia Martinez"
    },
    {
      "id": 9,
      "title": "Annual Employee Survey",
      "description": "Annual survey to gather employee feedback.",
      "type": "Survey",
      "questions": [
        {
          "id": 117,
          "text": "How would you rate your overall job satisfaction?",
          "type": "Rating",
          "options": [1, 2, 3, 4, 5],
          "answer": 4
        },
        {
          "id": 118,
          "text": "What improvements would you suggest for the workplace?",
          "type": "Text",
          "options": [],
          "answer": "More flexible working hours."
        }
      ],
      "createdAt": "2023-09-15T15:50:00Z",
      "createdBy": "Liam Anderson"
    },
    {
      "id": 10,
      "title": "New Product Development Survey",
      "description": "Survey to gather feedback on new product ideas.",
      "type": "Survey",
      "questions": [
        {
          "id": 119,
          "text": "Which features do you find most appealing?",
          "type": "Checkbox",
          "options": ["Feature A", "Feature B", "Feature C", "Feature D"],
          "answer": ["Feature A", "Feature B"]
        },
        {
          "id": 120,
          "text": "Would you be interested in purchasing this product?",
          "type": "Multiple Choice",
          "options": ["Yes", "No", "Maybe"],
          "answer": "Yes"
        }
      ],
      "createdAt": "2023-10-30T12:40:00Z",
      "createdBy": "William Johnson"
    }
  ]
  