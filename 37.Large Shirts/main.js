function make_shirt(size, text) {
    if (size === void 0) { size = 'Large'; }
    if (text === void 0) { text = 'I love TypeScipt'; }
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(text));
}
make_shirt();
make_shirt('Medium');
make_shirt(undefined, 'I love Pakistan');
