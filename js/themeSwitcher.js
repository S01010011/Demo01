
(function(){

	function ThemeSwitcher(){
		self = this;
		this.$themeSwitcher = $('#themeSwitcher');
		this.$panelSwitch = $('#panel-switch');
		this.state = "hidden";
		this.$theme = $('#theme');
		this.$themes = $('#themeSwitcher li>a');

		this.$themeSwitcher.css('left',-Math.ceil(this.$themeSwitcher.outerWidth()));

		this.$panelSwitch.on('click',function(){
			self.panelSwitch();
		});

		this.$themes.each(function(index,elem){
			$(elem).on('click',function(){
				self.themeSwitch(this.id);
			})
		})
	}
	ThemeSwitcher.prototype.panelSwitch = function(){
		if(this.state === "hidden") {
			this.state = "showed";
			this.panelShow();
		}
		else if(this.state === "showed") {
			this.state = "hidden";
			this.panelHide();
		}
	}
	ThemeSwitcher.prototype.panelShow = function(){
		// console.log('showed');
		this.$themeSwitcher.stop(true).animate({
			left: 0,
		},500);
	}
	ThemeSwitcher.prototype.panelHide = function(){
		// console.log('hidden');
		this.$themeSwitcher.stop(true).animate({
			left: -Math.ceil(this.$themeSwitcher.outerWidth()),
		},500);
	}
	ThemeSwitcher.prototype.themeSwitch = function(id){
		// console.log(id)
		this.$theme.attr('href','css/theme/'+id+'.css');
	}

	var ts = new ThemeSwitcher;

})();