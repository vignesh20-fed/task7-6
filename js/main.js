const numbers = [1, 2, 3, 4, 5];
			const multi = numbers.reduce(function (v1, v2) {
			  ok= v1 * v2;
			  return ok;
			});
		console.log(multi/3);
		document.write("<br>",multi/3);
		