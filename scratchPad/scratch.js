let userInfo = {
  name: 'Abhin',
  nationality: 'India 🇮🇳',
};

function displayDetails() {
  console.log(`${this.name} from ${this.nationality}`);
}

let display = displayDetails.bind(userInfo);
