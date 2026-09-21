export const names = [
  "Harry", "Ali", "Ahmed", "Zain", "Usman", "Hassan", "Bilal", "Ayan", "John", "David",
  "Michael", "James", "Robert", "William", "Joseph", "Daniel", "Matthew", "Andrew", "Ryan", "Noah",
  "Liam", "Mason", "Ethan", "Lucas", "Benjamin", "Logan", "Henry", "Jack", "Leo", "Adam",
  "Hamza", "Saad", "Talha", "Abdullah", "Huzaifa", "Rehan", "Farhan", "Taha", "Ammar", "Shayan",
  "Omar", "Ibrahim", "Yusuf", "Mustafa", "Asad", "Daniyal", "Haris", "Anas", "Arham", "Rayyan"
];

export const languages = [
  "JavaScript", "Python", "Java", "C++", "C#", "Go", "Rust", "PHP", "TypeScript", "Kotlin",
  "Swift", "Ruby", "Perl", "R", "Dart", "Scala", "Haskell", "Lua", "MATLAB", "Julia",
  "Objective-C", "Groovy", "Elixir", "F#", "Erlang", "Fortran", "COBOL", "Pascal", "Ada", "Prolog",
  "Visual Basic", "Assembly", "Shell", "PowerShell", "SQL", "MongoDB", "HTML", "CSS", "Sass", "Less",
  "React", "Angular", "Vue", "Node.js", "Express.js", "Next.js", "NestJS", "Spring Boot", "FastAPI", "Django"
];

export const cities = [
  "Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala",
  "New York", "Los Angeles", "Chicago", "Houston", "Miami", "London", "Manchester", "Birmingham", "Paris", "Berlin",
  "Madrid", "Rome", "Amsterdam", "Brussels", "Vienna", "Zurich", "Tokyo", "Osaka", "Seoul", "Beijing",
  "Shanghai", "Hong Kong", "Singapore", "Bangkok", "Dubai", "Abu Dhabi", "Doha", "Riyadh", "Istanbul", "Moscow",
  "Toronto", "Vancouver", "Montreal", "Sydney", "Melbourne", "Auckland", "Cape Town", "Johannesburg", "Delhi", "Mumbai"
];
export function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}