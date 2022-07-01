# FlashJsSlotPrototype
## 使用說明
將 Flash IDE 製作的 Slot Prototype，改製作成 CreateJS 版本練習。
1. 沒有做 loading，初始畫面是黑的
2. 沒做滑鼠事件，按鍵盤空白鍵啟動
3. 沒有設定贏分，只有 Spin 功能

[連結](https://todd4diy.github.io/FlSlotPrototype/)

## 轉至說明
> 雖然 Flash Player 死透了。
但習慣 Flash IDE，在同個環境下編輯視覺跟邏輯的方便
也只能遷就從 ActionScript 3.0 轉 CreateJS 的雷與痛
> 

### ▍ 基本差異

1. 不用 import，不用寫型別
2. 物件層級很神奇，大雷都在這。
3. 場景上 MovieClip 的錨點及座標，是以自由變形工具(Q)的白點為依據。
4. TweenJS 真的好用? 

### ▍ 執行紀錄

在 ActionScript 3.0 中用`trace()`，CreateJS 用`console.log()`。

### ▍ 使用場景上的 Movie Clip

在場景上，有命名的 movieclip，呼叫選取。例如：場景上有個物件，類別設為 Ball ，命名為 mc。在 ActionScript 3.0 中直接用`this.mc`，可以直接呼叫。

而在 CreateJS，需使用`exportRoot`而不是`this`。可以理解為多一個層級。比較玄的是，先宣告一個物件值為`this`，效果相同於呼叫`exportRoot`。

```jsx
var root = this;

init()

function init(){
	console.log(root.mc);//>lib.Ball
	console.log(exportRoot.mc);//>lib.Ball
	console.log(this.mc)//undefined
}
```

### ▍ 宣告元件庫裡的 Movie Clip

元件庫裡有命名 Box 類別的 movieclip。在 ActionScript 3.0 中宣告

```jsx
var box:MovieClip;
init()

function init(){
	box = new Box();
	box.x = stage.stageWidth/2;
	box.y = stage.stageHeight/2;
	this.addChild
}
```

在 CreateJS，需多加`lib`，原本 stage 的一些資料也移到 canvas 上

```jsx
var root = this
var box;
init()

function init(){
	box = new lib.Box();//**lib
	box.x= canvas.width/2;
	box.y= canvas.height/2;
	root.addChild(box);//...O
	//exportRoot.addChild(box);//...O
	//this.stage.addChild(box);//...O
	//this.stage.addChild(box);//...X
}
```

之後呼叫 box，直接呼叫，前面帶 exportRoot 會找不到。

### ▍ 使用場景上 Movie Clip 的子 Movie Clip

直接`.`就好。

### ▍ 場景上Movie Clip 的寬高資訊

```jsx
myMC.getBounds();
```

### ▍ Movie Clip 設定錨點

場景上的 Movie Clip，錨點重設，座標還是在白點。

```jsx
myMC.regX=myMC.regY = 0; 
```

### ▍ 一般宣告 function

同 ActionScript 3.0，但參數不加型別，不寫回傳值型別。

```jsx
function myFunc(input){…}
```

### ▍ 子物件裡的自定義參數 及 function

CreateJS 無法存取子物件自定義的參數 及 function，需改寫如下，才能被上層呼叫

```jsx
var myValue;
this.getMyValue = function(){
	return myValue;
}
```

而且有創見時間差問題，不過 ActionScript 也有物件時間差問題，處理方法類似。

### ▍ 滑鼠事件

ActionScript 3.0 寫法

```jsx
function init():void{
	btn.addEventListener(MouseEvent.MOUSE_UP,onBtnMouseUp);
}

function onBtnMouseUp(evt:MouseEvent):void{
	btn.addEventListener(MouseEvent.MOUSE_UP,onBtnMouseUp);
}
```

CreateJS  差不多，事件類型可以查相關 [API](https://www.createjs.com/docs/easeljs/classes/DisplayObject.html)

```jsx
function init(){
	btn.addEventListener("pressup",onBtnPreesUp)
}

function onBtnPreesUp(evt){
	btn.removeEventListener("pressup",onBtnPreesUp)
}
```

### ▍ 鍵盤事件

ActionScript 3.0 寫法

```jsx
function init(){
	stage.addEventListener(KeyboardEvent.KEY_UP,onKeyUp)
}
function onKeyUp(evt:KeyboardEvent){
	switch(evt.keyCode){
		case Keyboard.SPACE:
			//Do Something
		break;
	}
}
```

CreateJS  寫法

```jsx
function init(){
	window.addEventListener("keyup", onKeyUp.bind(this));
}
function onKeyUp(evt){
	switch(evt.keyCode){
		case Keyboard.32:
			//Do Something
		break;
	}
}
```
