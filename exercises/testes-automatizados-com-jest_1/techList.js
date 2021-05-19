function techList(techs,name) {
    if(techs.length === 0) return 'Vazio!';
    return techs
      .sort()
      .map((tech) => {
        return {
            tech,
            name,
        }
    })
}
//console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
module.exports = techList;