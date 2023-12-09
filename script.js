const students = [
    {
        name:"Lucas",
        firstNote: 6,
        secondNote: 4,    
    },
    {
        name:"Matheus",
        firstNote: 10,
        secondNote: 10, 
    },
    {
        name:"Ana",
        firstNote: 2,
        secondNote: 2, 
    },
    {
        name:"Dane",
        firstNote: 8,
        secondNote: 9, 
    },
]


function PrintAverage(student) { 
    return (
        (student.firstNote + student.secondNote) / 2        
    )
}

for(let student of students) {
    let average = PrintAverage(student)
    if(average >= 7) {
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${average}
        Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    } else {
        alert(`
         A média do(a) aluno(a) ${student.name} é: ${average}
         Não foi dessa vez, ${student.name}! Tente novmente!
         `)
    }
}




