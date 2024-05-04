let arr = [1,2,3] 

function mirror(arr) {

	for(let i=arr.length-2;i>=0;i--){

		arr.push(arr[i])

	}

	return arr
    
}

document.write(mirror(arr))
