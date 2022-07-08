let noOfCharac = 142;
		let contents = document.querySelectorAll('.text');
		contents.forEach(content => {
			if (content.textContent.length < noOfCharac) {
				content.nextElementSibling.style.display = "none";
			} else {
				let displayText = content.textContent.slice(0, noOfCharac);
				let moreText = content.textContent.slice(noOfCharac);
				content.innerHTML = `${displayText}<span class="dots">...</span><span class="more-text more">${moreText}</span>`;
			}
		});

		function readMore(btn) {
			let post = btn.parentElement;
			post.querySelector(".dots").classList.toggle("more-text");
			post.querySelector(".more").classList.toggle("more-text");
			btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
		}