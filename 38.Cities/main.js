function describe_city(city, country) {
    if (country === void 0) { country = 'Default Country.'; }
    console.log(" ".concat(city, "  is in ").concat(country));
}
describe_city('Karachi', 'Pakistan');
describe_city('Washington', 'USA');
describe_city('Cairo');
