function BlackDog() {
    this.name = 'white';
    return {
        name: 'black',
        bark: function() {
            console.log(this.name + ': warawar');
        }
    }
}