/**
* Subnavi include
* ------------------
*/

(function(){
	var str=''
		+'<div class="subNavi_inner">'
		+'		<ul class="subNaviList">'
		+'			<li class="subMenu-schedule"><a href="#none"><span>일정관리</span></a></li>'
		+'			<li class="subMenu-farm"><a href="#none"><span>농가정보</span></a></li>'
		+'			<li class="subMenu-consulting active"><a href="#none"><span>컨설팅관리</span></a></li>'
		+'			<li class="subMenu-as"><a href="#none"><span>A/S관리</span></a></li>'
		+'			<li class="subMenu-price"><a href="#none"><span>농산물시세</span></a></li>'
		+'			<li class="subMenu-notice"><a href="#none"><span>공지사항</span></a></li>'
		+'		</ul>'
		+'		<div class="select_daesh_board">'
		+'			<span class="radioSwich">'
		+'				<span class="radioSwichInner">'
		+'					<input type="radio" id="se_daesh" name="se_board" checked>'
		+'					<label for="se_daesh">대시보드</label>'
		+'				</span>'
		+'				<span class="radioSwichInner">'
		+'					<input type="radio" id="se_map" name="se_board">'
		+'					<label for="se_map">지도</label>'
		+'				</span>'
		+'			</span>'
		+'		</div>'
		+'	</div>'
	;
	document.write(str);
})();