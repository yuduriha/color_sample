/**
 * テキスト入力処理
 */
function onTapInput() {
	let input = (<HTMLInputElement>document.getElementById("input-data"))?.value;
	let elm = document.getElementById("result");
	
	if(elm) {
		elm.innerHTML = convert(input);
	}
}

/**
 * テキスト変換処理
 */
function convert(src: string) {
	// カラーコードにサンプルを追加
	let tmp = src.replace(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g,(result) => {
		return result + createColorSample(result);
	});
	// 最後に改行をbrに置換
	return tmp.replace(/(\n\r|\n|\r)/g,"<br>");
}

/**
 * カラーサンプルDOM作成
 */
function createColorSample(color: string) {
	return "<div class='color-sample' style='background-color:" + color + ";'>　</div>";
}