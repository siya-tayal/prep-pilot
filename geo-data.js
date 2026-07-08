// Country list (UN member states + common territories) and a curated set of
// well-known universities per major study-abroad country. This is not
// exhaustive; students whose school isn't listed can type it in manually.

const COUNTRIES = [
"Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria",
"Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
"Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
"Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Costa Rica","Croatia",
"Cuba","Cyprus","Czechia","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt",
"El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon",
"Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
"Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland",
"Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo",
"Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania",
"Luxembourg","Macau","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania",
"Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
"Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia",
"Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines",
"Poland","Portugal","Qatar","Republic of the Congo","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines",
"Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia",
"Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname",
"Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga",
"Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States",
"Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

// Curated, not exhaustive. Students can always type their own via "My school isn't listed".
const UNIVERSITIES_BY_COUNTRY = {
  "United States": ["Harvard University","Stanford University","Massachusetts Institute of Technology","University of California, Berkeley","University of California, Los Angeles","Columbia University","University of Michigan","New York University","University of Texas at Austin","University of Southern California","University of Pennsylvania","Cornell University","University of Illinois Urbana-Champaign","Georgia Institute of Technology","University of Washington","Purdue University","Ohio State University","Arizona State University","University of Florida","Northeastern University"],
  "India": ["Indian Institute of Technology Bombay","Indian Institute of Technology Delhi","Indian Institute of Technology Madras","Indian Institute of Technology Kanpur","Indian Institute of Technology Kharagpur","Indian Institute of Science","Delhi University","University of Mumbai","Anna University","BITS Pilani","VIT University","Manipal Academy of Higher Education","SRM Institute of Science and Technology","Jawaharlal Nehru University","Amity University"],
  "United Kingdom": ["University of Oxford","University of Cambridge","Imperial College London","London School of Economics","University College London","University of Edinburgh","King's College London","University of Manchester","University of Warwick","University of Bristol"],
  "Canada": ["University of Toronto","University of British Columbia","McGill University","University of Waterloo","University of Alberta","McMaster University","University of Montreal","Western University","Queen's University","Simon Fraser University"],
  "China": ["Tsinghua University","Peking University","Fudan University","Shanghai Jiao Tong University","Zhejiang University","University of Science and Technology of China","Nanjing University","Wuhan University"],
  "Australia": ["University of Melbourne","Australian National University","University of Sydney","University of New South Wales","University of Queensland","Monash University","University of Western Australia"],
  "Germany": ["Technical University of Munich","Ludwig Maximilian University of Munich","Heidelberg University","Humboldt University of Berlin","RWTH Aachen University","Free University of Berlin"],
  "Pakistan": ["Lahore University of Management Sciences","National University of Sciences and Technology","Quaid-i-Azam University","University of the Punjab","FAST-NUCES"],
  "Bangladesh": ["University of Dhaka","Bangladesh University of Engineering and Technology","North South University","BRAC University"],
  "Nigeria": ["University of Lagos","University of Ibadan","Obafemi Awolowo University","Covenant University","Ahmadu Bello University"],
  "South Korea": ["Seoul National University","Korea Advanced Institute of Science and Technology","Yonsei University","Korea University"],
  "Japan": ["University of Tokyo","Kyoto University","Osaka University","Tokyo Institute of Technology"],
  "France": ["Sorbonne University","PSL University","Sciences Po","École Polytechnique","HEC Paris"],
  "Singapore": ["National University of Singapore","Nanyang Technological University","Singapore Management University"],
  "United Arab Emirates": ["United Arab Emirates University","American University of Sharjah","Khalifa University"],
  "Mexico": ["National Autonomous University of Mexico","Monterrey Institute of Technology","Universidad Iberoamericana"],
  "Brazil": ["University of São Paulo","University of Campinas","Federal University of Rio de Janeiro"],
  "Nepal": ["Tribhuvan University","Kathmandu University"],
  "Sri Lanka": ["University of Colombo","University of Moratuwa","University of Peradeniya"],
  "Vietnam": ["Vietnam National University, Hanoi","Ho Chi Minh City University of Technology"],
  "Philippines": ["University of the Philippines","Ateneo de Manila University","De La Salle University"],
  "South Africa": ["University of Cape Town","University of the Witwatersrand","Stellenbosch University"],
  "Kenya": ["University of Nairobi","Kenyatta University"],
  "Egypt": ["Cairo University","American University in Cairo"],
  "Turkey": ["Boğaziçi University","Middle East Technical University","Istanbul Technical University"],
  "Saudi Arabia": ["King Saud University","King Abdulaziz University","King Fahd University of Petroleum and Minerals"],
  "Indonesia": ["University of Indonesia","Bandung Institute of Technology","Gadjah Mada University"],
  "Malaysia": ["University of Malaya","Universiti Kebangsaan Malaysia","Universiti Putra Malaysia"],
  "Netherlands": ["University of Amsterdam","Delft University of Technology","Utrecht University"],
  "Ireland": ["Trinity College Dublin","University College Dublin"],
  "New Zealand": ["University of Auckland","University of Otago"]
};

if (typeof window !== "undefined") {
  window.COUNTRIES = COUNTRIES;
  window.UNIVERSITIES_BY_COUNTRY = UNIVERSITIES_BY_COUNTRY;
}
