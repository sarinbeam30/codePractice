let command_2 = "G()()()()(al)"           // Gooooal
let command_3 = "(al)G(al)()()G"          // alGalooG

function interpret (command) {
    // [)G] --> It will detect two character ')' and 'G'.
    command = command.split(/[)G]/)
    for (let i=0; i<command.length-1; i++) {
        
        if (command[i] === '(al') {
            command[i] = 'al'
        } else if (command[i] === '(') {
            command[i] = 'o'
        } else {
            command[i] = 'G'
        }
    }

    command = command.join('')
    return command
}

interpret(command_2);