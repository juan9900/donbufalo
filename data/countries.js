const countries = [
  {
    key: "VE",
    label: "Venezuela",
    placeholder: "424 123 4567",
    code: "+58",
    regex: /^(414|424|412|416|426)[0-9]{7}$/g,
  },
  {
    key: "US",
    label: "Estados Unidos",
    placeholder: "650 123 45 67",
    code: "+1",
    regex: /^[0-9]{3}[0-9]{3}[0-9]{4}$/g,
  },
  {
    key: "CO",
    label: "Colombia",
    placeholder: "350 123 4567",
    code: "+57",
    regex: /^[0-9]{3}[0-9]{3}[0-9]{4}$/g,
  },
  {
    key: "BR",
    label: "Brasil",
    placeholder: "11 91234 5678",
    code: "+55",
    regex: /^[0-9]{2}[0-9]{5}[0-9]{4}$/g,
  },
];

export default countries;
