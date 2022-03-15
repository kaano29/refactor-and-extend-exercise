let initialState = {
brand: "Volkswagen",
logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/600px-Volkswagen_logo_2019.svg.png",
year: new Date().getFullYear(),
isValid: true,
};

export default(state = initialState, action) => {
    switch (action.type) {
        case "SELECT":
            return state
        case "ADD":
            return state
        default:
        return state;        
    }
} 