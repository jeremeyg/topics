const company = {
  name: "TechCorp",
  employees: {
    employee1: "Alice",
    employee2: "Bob",
    employee3: "Charlie",
  },
  location: "San Francisco",
};

Object.entries(company).forEach(([key, value]) => {
  if (typeof value === "object") {
    console.log(`Key: ${key}, Value:`);
    Object.entries(value).forEach(([subKey, subValue]) => {
      console.log(`  SubKey: ${subKey}, SubValue: ${subValue}`);
    });
  } else {
    console.log(`Key: ${key}, Value: ${value}`);
  }
});
