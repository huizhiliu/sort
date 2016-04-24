		(function() {
			let lists = document.querySelectorAll('.list');
			Array.prototype.slice.call(lists).forEach(function(list) {
				list.style.height = Math.random()*200 + 'px';
			})

		})()

		let buttons = document.querySelectorAll('button');
		Array.prototype.slice.call(buttons).forEach(function(button) {
			button.addEventListener('click',function(){
				sort(this.className);
			},false)
		})

		function* sort(type) {
			let array = [];
			let lists = document.querySelectorAll('.list');
			Array.prototype.slice.call(lists).forEach(function(list) {
				array.push(list.offsetHeight);	
			})
			array.forEach(function(item,index) {
				return item > array[index+1];	
			})
		}
		let a = sort();
		a.next();