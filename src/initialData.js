const initialApiFetch = [
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "First Name",
    fieldType: "TXT",
    mandatory: "Y",
    order: 1,
    expectedValues: [],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "Last Name",
    fieldType: "TXT",
    mandatory: "N",
    order: 2,
    expectedValues: [],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "Email Address",
    fieldType: "TXT",
    mandatory: "Y",
    order: 3,
    expectedValues: [],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "Title",
    fieldType: "TXT",
    mandatory: "N",
    order: 4,
    expectedValues: [],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "Company Name",
    fieldType: "SS",
    mandatory: "Y",
    order: 5,
    expectedValues: ["Enhancio", "Infosys", "Microsoft"],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "Job Level",
    fieldType: "SS",
    mandatory: "Y",
    order: 6,
    expectedValues: ["Manager", "Engineer"],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "Job Function",
    fieldType: "SS",
    mandatory: "Y",
    order: 7,
    expectedValues: ["Designer", "Developer"],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "Company Size",
    fieldType: "MS",
    mandatory: "Y",
    order: 8,
    expectedValues: ["10 -20", "20-30", "30-100"],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "Industry",
    fieldType: "MS",
    mandatory: "Y",
    order: 9,
    expectedValues: [
      "Mining",
      "Construction",
      "Information",
      "Health Care and Social Assistance",
      "Educational Services",
      "Mass media",
      "Hospitality industry",
      "Entertainment industry",
      "Food industry",
      "Agriculture",
      "Market research",
    ],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "Resource Downloaded",
    fieldType: "MS",
    mandatory: "Y",
    order: 10,
    expectedValues: ["Resource One", "Test Resource", "Quick Start"],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "Street Address",
    fieldType: "TXT",
    mandatory: "Y",
    order: 11,
    expectedValues: [],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "City",
    fieldType: "TXT",
    mandatory: "Y",
    order: 12,
    expectedValues: [],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "State",
    fieldType: "TXT",
    mandatory: "Y",
    order: 13,
    expectedValues: [],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "Country",
    fieldType: "TXT",
    mandatory: "Y",
    order: 14,
    expectedValues: [],
  },
  {
    id: null,
    createdOn: "2020-02-24T13:20:47.500+0000",
    fieldName: "Zip Code",
    fieldType: "TXT",
    mandatory: "Y",
    order: 15,
    expectedValues: [],
  },
]

// export default initialApiFetch

const addId = (arr) => {
  return arr.map(function(obj, index) {
    return Object.assign({}, obj, { id: index });
  });
};

console.log(addId(initialApiFetch))
