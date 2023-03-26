#!/usr/bin/env node


function beat(choice1, choice2){
	switch(choice1){
		case 'rock':
			switch(choice2){
				case 'paper':
					return false
				case 'scissors':
					return true
				case 'lizard':
					return true
				case 'spock':
					return false
			}
		case 'paper':
			switch(choice2){
				case 'scissors':
					return false
				case 'lizard':
					return false
				case 'spock':
					return true
			}
		case 'scissors':
			switch(choice2){
				case 'lizard':
					return true
				case 'spock':
					return false
			}
		case 'lizard':
			if(choice2 == 'spock') { return true }
		default:
			return !beat(choice2, choice1)
	}
}

let shots = ['rock', 'paper', 'scissors']
export function rps(shot){
	var choice = shots[Math.floor(Math.random() * shots.length)]
	if(shot === null || shot === undefined){
		return {'player': choice}
	}
        if(shots.includes(shot)){
		if(shot === choice){
			var result = 'tie'
		}
		else{
			var result = beat(shot, choice) ? 'win' : 'lose'
		}
                return {
                        'player': shot,
                        'opponent': choice,
                        'result': result
                }
        }
        else{
		console.log("error")
                throw RangeError()
        }
}
export function rpsls(shot){
	shots.push('lizard')
	shots.push('spock')
	return rps(shot)
}
