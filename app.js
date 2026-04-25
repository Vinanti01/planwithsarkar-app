const STORAGE_KEY = "planwithsarkar_schemes_v1";
const LEAD_KEY = "planwithsarkar_leads_v1";

const defaultSchemes = [
  {
    id: crypto.randomUUID(),
    name: "PM Kisan Samman Nidhi",
    states: ["All"],
    occupation: "farmer",
    minAge: 18,
    maxIncome: 9999999,
  },
  {
    id: crypto.randomUUID(),
    name: "PM Mudra Loan",
    states: ["All"],
    occupation: "self_employed",
    minAge: 18,
    maxIncome: 1000000,
  },
  {
    id: crypto.randomUUID(),
    name: "Maharashtra Bike Taxi / Vehicle Finance Support",
    states: ["Maharashtra"],
    occupation: "unemployed",
    minAge: 18,
    maxIncome: 600000,
  },
  {
    id: crypto.randomUUID(),
    name: "Women Entrepreneur Subsidy Program",
    states: ["All"],
    occupation: "woman_entrepreneur",
    minAge: 18,
    maxIncome: 1200000,
  },
  {
    id: crypto.randomUUID(),
    name: "State Education Support Scholarship",
    states: ["All"],
    occupation: "student",
    minAge: 18,
    maxIncome: 400000,
  },
];

const i18n = {
  en: {
    languageLabel: "Language",
    finderTitle: "Government Scheme Finder (India)",
    finderSubtitle: "Enter your details to view eligible schemes.",
    ageLabel: "Age",
    incomeLabel: "Annual Income (₹)",
    stateLabel: "State",
    occupationLabel: "Occupation",
    findSchemesButton: "Find Schemes",
    eligibleTitle: "Eligible Schemes",
    leadTitle: "Get a Call Back",
    leadSubtitle: "Share your details for loans, subsidy and vehicle finance support.",
    nameLabel: "Name",
    phoneLabel: "Phone",
    cityLabel: "City",
    leadSubmit: "Submit Lead",
    adminTitle: "Admin Panel - Manage Schemes",
    adminSubtitle: "Add, update or remove schemes shown to users.",
    adminNameLabel: "Scheme Name",
    adminStatesLabel: "States (comma separated or All)",
    adminOccupationLabel: "Occupation",
    adminMinAgeLabel: "Min Age",
    adminMaxIncomeLabel: "Max Income (₹)",
    adminSaveButton: "Save Scheme",
    adminResetButton: "Clear",
    thName: "Name",
    thStates: "States",
    thOccupation: "Occupation",
    thEligibility: "Eligibility",
    thActions: "Actions",
    noSchemes: "No schemes found for this profile.",
    edit: "Edit",
    delete: "Delete",
    leadSuccess: "Thank you! Our team will contact you shortly.",
    schemeSaved: "Scheme saved.",
  },
  hi: {
    languageLabel: "भाषा",
    finderTitle: "सरकारी योजना खोजक (भारत)",
    finderSubtitle: "अपनी जानकारी भरें और पात्र योजनाएँ देखें।",
    ageLabel: "आयु",
    incomeLabel: "वार्षिक आय (₹)",
    stateLabel: "राज्य",
    occupationLabel: "पेशा",
    findSchemesButton: "योजनाएँ खोजें",
    eligibleTitle: "पात्र योजनाएँ",
    leadTitle: "कॉल बैक प्राप्त करें",
    leadSubtitle: "लोन, सब्सिडी और वाहन फाइनेंस सहायता के लिए जानकारी दें।",
    nameLabel: "नाम",
    phoneLabel: "फोन",
    cityLabel: "शहर",
    leadSubmit: "लीड सबमिट करें",
    adminTitle: "एडमिन पैनल - योजनाएँ प्रबंधन",
    adminSubtitle: "उपयोगकर्ताओं को दिखने वाली योजनाएँ जोड़ें, अपडेट करें या हटाएँ।",
    adminNameLabel: "योजना नाम",
    adminStatesLabel: "राज्य (कॉमा से अलग या All)",
    adminOccupationLabel: "पेशा",
    adminMinAgeLabel: "न्यूनतम आयु",
    adminMaxIncomeLabel: "अधिकतम आय (₹)",
    adminSaveButton: "योजना सेव करें",
    adminResetButton: "साफ़ करें",
    thName: "नाम",
    thStates: "राज्य",
    thOccupation: "पेशा",
    thEligibility: "पात्रता",
    thActions: "कार्रवाई",
    noSchemes: "इस प्रोफ़ाइल के लिए कोई योजना नहीं मिली।",
    edit: "संपादित करें",
    delete: "हटाएँ",
    leadSuccess: "धन्यवाद! हमारी टीम आपसे जल्द संपर्क करेगी।",
    schemeSaved: "योजना सेव हुई।",
  },
  mr: {
    languageLabel: "भाषा",
    finderTitle: "शासकीय योजना शोधक (भारत)",
    finderSubtitle: "आपली माहिती भरा आणि पात्र योजना पाहा.",
    ageLabel: "वय",
    incomeLabel: "वार्षिक उत्पन्न (₹)",
    stateLabel: "राज्य",
    occupationLabel: "व्यवसाय",
    findSchemesButton: "योजना शोधा",
    eligibleTitle: "पात्र योजना",
    leadTitle: "कॉल बॅक मिळवा",
    leadSubtitle: "कर्ज, अनुदान आणि वाहन फायनान्ससाठी आपली माहिती द्या.",
    nameLabel: "नाव",
    phoneLabel: "फोन",
    cityLabel: "शहर",
    leadSubmit: "लीड सबमिट करा",
    adminTitle: "ॲडमिन पॅनल - योजना व्यवस्थापन",
    adminSubtitle: "वापरकर्त्यांना दिसणाऱ्या योजना जोडा, बदला किंवा काढा.",
    adminNameLabel: "योजना नाव",
    adminStatesLabel: "राज्ये (स्वल्पविरामाने किंवा All)",
    adminOccupationLabel: "व्यवसाय",
    adminMinAgeLabel: "किमान वय",
    adminMaxIncomeLabel: "कमाल उत्पन्न (₹)",
    adminSaveButton: "योजना जतन करा",
    adminResetButton: "रिकामे करा",
    thName: "नाव",
    thStates: "राज्ये",
    thOccupation: "व्यवसाय",
    thEligibility: "पात्रता",
    thActions: "कृती",
    noSchemes: "या प्रोफाइलसाठी कोणतीही योजना सापडली नाही.",
    edit: "संपादित करा",
    delete: "काढा",
    leadSuccess: "धन्यवाद! आमची टीम लवकरच संपर्क करेल.",
    schemeSaved: "योजना जतन झाली.",
  },
};

const occupationLabels = {
  all: "All",
  farmer: "Farmer",
  student: "Student",
  salaried: "Salaried",
  self_employed: "Self-employed",
  unemployed: "Unemployed",
  woman_entrepreneur: "Woman Entrepreneur",
};

let schemes = loadSchemes();
let currentLang = "en";

const el = (id) => document.getElementById(id);

function loadSchemes() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSchemes));
  return [...defaultSchemes];
}

function saveSchemes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(schemes));
}

function setLanguage(lang) {
  currentLang = lang;
  const dict = i18n[lang];

  Object.entries(dict).forEach(([id, text]) => {
    const target = el(id);
    if (target) {
      target.textContent = text;
    }
  });

  renderAdminTable();
}

function findEligible(age, income, state, occupation) {
  return schemes.filter((scheme) => {
    const stateAllowed = scheme.states.includes("All") || scheme.states.includes(state);
    const occupationAllowed = scheme.occupation === "all" || scheme.occupation === occupation;
    const ageAllowed = age >= Number(scheme.minAge || 18);
    const incomeAllowed = income <= Number(scheme.maxIncome || 9999999);

    return stateAllowed && occupationAllowed && ageAllowed && incomeAllowed;
  });
}

function renderSchemeResults(items) {
  const list = el("schemeResults");
  list.innerHTML = "";

  if (!items.length) {
    const li = document.createElement("li");
    li.textContent = i18n[currentLang].noSchemes;
    list.appendChild(li);
    return;
  }

  items.forEach((scheme) => {
    const li = document.createElement("li");
    li.className = "scheme-item";
    li.innerHTML = `<strong>${scheme.name}</strong><br/>${occupationLabels[scheme.occupation] || "All"} • ${scheme.states.join(", ")} • Age ${scheme.minAge}+ • Income ≤ ₹${Number(scheme.maxIncome).toLocaleString("en-IN")}`;
    list.appendChild(li);
  });
}

function renderAdminTable() {
  const body = el("adminSchemeTableBody");
  body.innerHTML = "";

  schemes.forEach((scheme) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${scheme.name}</td>
      <td>${scheme.states.join(", ")}</td>
      <td>${occupationLabels[scheme.occupation] || "All"}</td>
      <td>Age ${scheme.minAge}+<br/>Income ≤ ₹${Number(scheme.maxIncome).toLocaleString("en-IN")}</td>
      <td>
        <button class="action-btn" data-edit="${scheme.id}">${i18n[currentLang].edit}</button>
        <button class="action-btn" data-delete="${scheme.id}">${i18n[currentLang].delete}</button>
      </td>
    `;
    body.appendChild(tr);
  });
}

function clearAdminForm() {
  el("schemeId").value = "";
  el("adminForm").reset();
  el("adminMinAge").value = 18;
  el("adminMaxIncome").value = 9999999;
  el("adminOccupation").value = "all";
}

function setupEvents() {
  el("languageSelect").addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });

  el("eligibilityForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const age = Number(el("age").value);
    const income = Number(el("income").value);
    const state = el("state").value;
    const occupation = el("occupation").value;

    const matched = findEligible(age, income, state, occupation);
    renderSchemeResults(matched);
  });

  el("leadForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const lead = {
      name: el("leadName").value.trim(),
      phone: el("leadPhone").value.trim(),
      city: el("leadCity").value.trim(),
      createdAt: new Date().toISOString(),
    };

    const leads = JSON.parse(localStorage.getItem(LEAD_KEY) || "[]");
    leads.push(lead);
    localStorage.setItem(LEAD_KEY, JSON.stringify(leads));

    el("leadMessage").textContent = i18n[currentLang].leadSuccess;
    el("leadForm").reset();
  });

  el("adminForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const schemeId = el("schemeId").value;
    const schemeData = {
      id: schemeId || crypto.randomUUID(),
      name: el("adminSchemeName").value.trim(),
      states: el("adminStates").value.split(",").map((x) => x.trim()).filter(Boolean),
      occupation: el("adminOccupation").value,
      minAge: Number(el("adminMinAge").value),
      maxIncome: Number(el("adminMaxIncome").value),
    };

    if (!schemeData.states.length) {
      schemeData.states = ["All"];
    }

    if (schemeId) {
      schemes = schemes.map((scheme) => (scheme.id === schemeId ? schemeData : scheme));
    } else {
      schemes.push(schemeData);
    }

    saveSchemes();
    renderAdminTable();
    clearAdminForm();
    el("leadMessage").textContent = i18n[currentLang].schemeSaved;
  });

  el("adminResetButton").addEventListener("click", clearAdminForm);

  el("adminSchemeTableBody").addEventListener("click", (event) => {
    const editId = event.target.dataset.edit;
    const deleteId = event.target.dataset.delete;

    if (editId) {
      const scheme = schemes.find((item) => item.id === editId);
      if (!scheme) {
        return;
      }

      el("schemeId").value = scheme.id;
      el("adminSchemeName").value = scheme.name;
      el("adminStates").value = scheme.states.join(", ");
      el("adminOccupation").value = scheme.occupation;
      el("adminMinAge").value = scheme.minAge;
      el("adminMaxIncome").value = scheme.maxIncome;
    }

    if (deleteId) {
      schemes = schemes.filter((scheme) => scheme.id !== deleteId);
      saveSchemes();
      renderAdminTable();
    }
  });
}

function init() {
  setupEvents();
  setLanguage("en");
  renderAdminTable();
}

init();
