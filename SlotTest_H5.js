(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"SlotTest_H5_atlas_", frames: [[0,0,533,946],[836,438,285,262],[1802,944,167,173],[1629,944,171,173],[1028,904,199,173],[1842,187,187,186],[1842,0,189,185],[1123,438,170,186],[535,438,299,330],[1318,396,342,331],[836,729,554,173],[1318,0,522,394],[535,0,781,436],[1662,701,288,241],[1392,729,235,267],[535,770,250,217],[1662,396,343,303],[787,904,239,212]]}
];


// symbols:



(lib.Background_Base = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖11 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖12 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖13 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖14 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖15 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖16 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖17 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖18 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖19 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖20 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖3 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖4 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖5 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖6 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖7 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖8 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖9 = function() {
	this.spriteSheet = ss["SlotTest_H5_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.reelBg_BaseB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.603,0.603);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.reelBg_BaseB, new cjs.Rectangle(0,0,471,263), null);


(lib.GameSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		var symbolID;
		var flagList;
		
		
		init()
		
		function init (){
			symbolID = "FF"
			flagList = ["","FF","H1","H2","H3","H4","AA","KK","QQ","JJ","WW"]
			root.gotoAndStop(0);
			onIdChange();
		}
		
		this.setID=function (id){
			symbolID = id;
			onIdChange();
		}
		
		this.getID = function (){
			return symbolID;
		}
			
		function onIdChange(){
			var ind = flagList.indexOf(symbolID);
			root.gotoAndStop(ind);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// 圖層 1
	this.instance = new lib.點陣圖6();
	this.instance.parent = this;
	this.instance.setTransform(-6,-25,0.345,0.36);

	this.instance_1 = new lib.點陣圖7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,-3,0.304,0.304);

	this.instance_2 = new lib.點陣圖8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-19,-16,0.306,0.306);

	this.instance_3 = new lib.點陣圖9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-4,-4,0.314,0.314);

	this.instance_4 = new lib.點陣圖11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-10,-10,0.298,0.298);

	this.instance_5 = new lib.點陣圖12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2,-3,0.382,0.382);

	this.instance_6 = new lib.點陣圖13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-4,0.389,0.389);

	this.instance_7 = new lib.點陣圖14();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1,-4,0.378,0.378);

	this.instance_8 = new lib.點陣圖15();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-2,-7,0.396,0.396);

	this.instance_9 = new lib.點陣圖16();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1,-4,0.362,0.362);

	this.instance_10 = new lib.點陣圖17();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1,-6,0.356,0.356);

	this.instance_11 = new lib.點陣圖5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-17,-13,0.347,0.347);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-25}}]}).to({state:[{t:this.instance,p:{y:-30}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-25,81,96);


(lib.Char1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖19();
	this.instance.parent = this;
	this.instance.setTransform(-118,-228.4,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Char1, new cjs.Rectangle(-118,-228.4,236,228.4), null);


(lib.Char0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖18();
	this.instance.parent = this;
	this.instance.setTransform(-100,-220.7,0.669,0.669);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Char0, new cjs.Rectangle(-100,-220.7,200,220.7), null);


(lib.ReelSprite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.sym5 = new lib.GameSymbol();
	this.sym5.name = "sym5";
	this.sym5.parent = this;
	this.sym5.setTransform(1.2,241);

	this.sym4 = new lib.GameSymbol();
	this.sym4.name = "sym4";
	this.sym4.parent = this;
	this.sym4.setTransform(1.2,181);

	this.sym3 = new lib.GameSymbol();
	this.sym3.name = "sym3";
	this.sym3.parent = this;
	this.sym3.setTransform(1.2,121);

	this.sym2 = new lib.GameSymbol();
	this.sym2.name = "sym2";
	this.sym2.parent = this;
	this.sym2.setTransform(1.2,61);

	this.sym1 = new lib.GameSymbol();
	this.sym1.name = "sym1";
	this.sym1.parent = this;
	this.sym1.setTransform(1.2,1);

	this.sym0 = new lib.GameSymbol();
	this.sym0.name = "sym0";
	this.sym0.parent = this;
	this.sym0.setTransform(1.2,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sym0},{t:this.sym1},{t:this.sym2},{t:this.sym3},{t:this.sym4},{t:this.sym5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ReelSprite, new cjs.Rectangle(-4.8,-84,81,396), null);


(lib.reelBg_Base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this
		
		init()
		
		function init(){
			var dur = 30*1000;
			var tx =-115;
			root.base.regX=root.base.regY = 0;
			createjs.Tween.get(root.base,{loop:-1})
			.to({x:tx},dur,createjs.Ease.none)
			.to({x:root.base.x},dur,createjs.Ease.none)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Frame
	this.instance = new lib.點陣圖3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.682,0.671);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5d0TMAzQAAAQAaAAAWAJQAXAIARAQQARAPAJAUQAKAUAAAXMAAAAlUQAAAXgKAUQgJAUgRAPQgRAPgXAJQgWAIgaAAMgzQAAAQg1gBgjgfQgjgfgCgvMAAAglUQABgXAJgUQAKgUARgPQARgQAWgIQAXgJAaAAg");
	mask.setTransform(177.5,131);

	// base
	this.base = new lib.reelBg_BaseB();
	this.base.name = "base";
	this.base.parent = this;
	this.base.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.base.cache(-2,-2,475,267);

	var maskedShapeInstanceList = [this.base];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.base).wait(1));

}).prototype = getMCSymbolPrototype(lib.reelBg_Base, new cjs.Rectangle(0,0,356.1,264.3), null);


(lib.Reel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var symbolList;
		var root=this;
		var reelSprite;
		var maskSprite;
		var symbolCount = 4;
		var disY = 60;
		
		var sourceStrip;
		var sourceIndex;
		var stopStrip;
		var stopIndex;
		var targetIndex;
		
		var normalDur = 1000 / 18;
		var normalDampDur = 0.12*1000;
		var normalPass = 1;
		var slowDur = 1/6;
		var slowDampDur = 0.1;
		var slowPass=8;
		var callback;
		
		var state
		var tween
		
		this.init = function(){
			reelSprite =root.reelSprite;
			maskSprite =root.maskSprite;
			initSymbolList();
		}
		
		this.setStrip=function (list){
			sourceStrip = list;
			sourceIndex = 0;
			showResult(sourceIndex);
		}
		
		
		function initSymbolList(){
			symbolList =new Array(6);
			for(var i = 0;i<symbolList.length;i++){
				symbolList[i] =reelSprite["sym"+i];
			}
		}
		
		function showResult(rng) {
			sourceIndex = rng;
			
			for (var i = 0; i <symbolList.length; i++) {
				var index = (sourceIndex - 1 + i);
				
				if (index < 0){
					index += sourceStrip.length;
				}else{
					index %= sourceStrip.length;
				}
				
				symbolList[i].setID(sourceStrip[index]);
			}
		}
		
		function showStopResult() {
			for (var i = 0; i <symbolList.length; i++) {
				var index = (stopIndex - 1 + i);
				symbolList[i].setID(stopStrip[index]);
			}
		}
		
		
		this.playSpin =function() {
			isSlow = false;
			state = "spin"
			createjs.Tween.get(reelSprite).to({alpha:0.3},normalDur)
			onSpin1Sym();
		}
		
		function onSpin1Sym(){
			createjs.Tween.get(reelSprite)
			.to({y:disY},normalDur,createjs.Ease.none)
			.call(onSpin1SymComplete);
		}
		
		function onSpin1SymComplete() {
			if(state == "spin"){
				sourceIndex--;
				if (sourceIndex < 0){
					sourceIndex += sourceStrip.length;
				}
				showResult(sourceIndex);
				reelSprite.y=0;
				onSpin1Sym()
			}else if(state == "stop"){
				stopIndex--;
				showStopResult();
				reelSprite.y=0;
				if (stopIndex == 1)
					onStopComplete();
				else
					onSpin1Sym()
			}
		}
		
		
		this.setTargetIndex=function (ind) {
			targetIndex = ind;
		}
		
		this.playStop = function(callFunk){
			callback=callFunk
			setStopStrip();
			state = "stop"
			createjs.Tween.get(reelSprite).to({alpha:1},normalDur)
		}
		
		function setStopStrip() {
			stopStrip = new Array();
			var stripLength =symbolList.length + normalPass - 1;
			
			for (var i = 0; i < stripLength; i++) {
				var index = (targetIndex - 1 + i);
				if (index < 0){
					index += sourceStrip.length;
				}else{
					index %= sourceStrip.length;
				}
				stopStrip.push(sourceStrip[index]);
			}
			
			for (i = 0; i <symbolList.length; i++) {
				stopStrip.push(symbolList[i].getID());
			}
			
			stopIndex = stopStrip.length - 5;
		}
		
		function onStopComplete() {
			sourceIndex = targetIndex;
			playDamping();
		
			if(callback!=null){
				callback.call();
				callback=null;
			}
		}
		
		function playDamping() {
			reelSprite.y=0
			var dur=normalDampDur;
			
			createjs.Tween.get(reelSprite)
			.to({y:disY*0.3},dur,createjs.Ease.none)
			.to({y:0},dur,createjs.Ease.none)
		}
		
		/*
		function setStopCount(count:int):void{
			symbolCount = count;
			updateReelSprite();
			showResult(targetIndex-1);
		}
		
		function setSpinCount(count:int):void{
			symbolCount = count;
			updateReelSprite();
		}
		
		function updateReelSprite():void{
			while(reelSprite.numChildren>0){
				reelSprite.removeChildAt(0);
			}
			symbolList =new Array(symbolCount+2);
			for(var i:int =0;i<symbolList.length;i++){
				symbolList[i] = new GameSymbol();
				symbolList[i].y = (i-1)*this.disY;
				reelSprite.addChild(symbolList[i]);
			}
		}
		
		function playSlowStop(callback:Function=null):void{
			isSlow = true;
			playStop(callback);
		}
		
		function randomTargetIndex():void{
			setTargetIndex(Math.floor(Math.random()*sourceStrip.length))
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AljzTILHAAMAAAAmnIrHAAg");
	mask.setTransform(34.2,116.1);

	// 圖層 1
	this.reelSprite = new lib.ReelSprite();
	this.reelSprite.name = "reelSprite";
	this.reelSprite.parent = this;
	this.reelSprite.setTransform(-1,0);

	var maskedShapeInstanceList = [this.reelSprite];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.reelSprite).wait(1));

}).prototype = getMCSymbolPrototype(lib.Reel, new cjs.Rectangle(-1.4,-7.5,71.3,247.3), null);


(lib.Char = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this
		var state;
		
		init();
		function init(){
			playIdle();
		}
		
		function playIdle(){
			if(state=="Idel")return;
			state = "Idel";
			root.char0.x=70;	
			root.char0.y=195;
			root.char0.scaleX=root.char0.scaleY=1;
			
			root.char1.x=300;	
			root.char1.y=195;
			root.char1.scaleX=root.char1.scaleY=1;
			
			createjs.Tween.get(root.char0,{loop:-1})
			.to({y:root.char0.y-2},750,createjs.Ease.sineIn)
			.to({y:root.char0.y},750,createjs.Ease.sineOut)
			
			createjs.Tween.get(root.char1,{loop:-1})
			.to({y:root.char1.y-2},750,createjs.Ease.sineIn)
			.to({y:root.char1.y},750,createjs.Ease.sineOut)
		}
		
		/* 
		function playIdle(){
			if(state=="Idel")return;
			state = "Idel";
			char0.x=70;	
			char0.y=195;
			char0.scaleX=char0.scaleY=1;
			
			char1.x=300;	
			char1.y=195;
			char1.scaleX=char1.scaleY=1;
			
			TweenMax.allTo([char0,char1],0.75,{
				y:char1.y-2,
				ease:Sine.easeIn,
				repeat:-1,
				yoyo:true
			})
		}
		
		function stopAni(){
			TweenMax.killTweensOf(char0);
			TweenMax.killTweensOf(char1);
		}
		
		function playWinNor(){
			stopAni();
			state = "Nor";
			var scale=1.2
			TweenMax.to(char0,0.1,{
				x:char0.x+100,
				y:char0.y+40,
				scaleX:scale,
				scaleY:scale,
				repeat:1,
				yoyo:true
			});
			TweenMax.to(char1,0.02,{
				delay:0.1,
				x:char1.x+10,
				y:char1.y+10,
				repeat:7,
				yoyo:true,
				onComplete:playIdle
			});
		}
		
		function playWinHigh(){
			stopAni();
			state = "High";
			var scale=1.2
			TweenMax.to(char1,0.1,{
				x:char1.x-100,
				y:char1.y+40,
				scaleX:scale,
				scaleY:scale,
				repeat:1,
				yoyo:true
			});
			TweenMax.to(char0,0.02,{
				delay:0.1,
				x:char0.x-10,
				y:char0.y+10,
				repeat:7,
				yoyo:true,
				onComplete:playIdle
			});
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8MM+IAA57MA4ZAAAIAAZ7g");
	mask.setTransform(180.5,83);

	// 圖層_2
	this.char1 = new lib.Char1();
	this.char1.name = "char1";
	this.char1.parent = this;
	this.char1.setTransform(300,195);

	this.char0 = new lib.Char0();
	this.char0.name = "char0";
	this.char0.parent = this;
	this.char0.setTransform(70,195);

	var maskedShapeInstanceList = [this.char1,this.char0];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.char0},{t:this.char1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Char, new cjs.Rectangle(0,0,361,166.1), null);


(lib.ReelSys = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var stripList = [
			["FF","H1","H1","AA","AA","KK","KK","H2","H2","QQ","QQ","NI","H3","H3","JJ","NI","JJ","H4","H4","TE","NI","TE"],
			["FF","H1","H1","H1","AA","AA","KK","KK","H2","H2","QQ","QQ","NI","H3","H3","JJ","NI","JJ","H4","H4","TE","NI","TE"],
			["FF","H1","H1","AA","AA","KK","KK","H2","H2","WW","QQ","QQ","NI","H3","H3","JJ","NI","JJ","H4","H4","TE","NI","TE"],
			["FF","H1","H1","AA","AA","KK","KK","H2","H2","QQ","QQ","NI","H3","H3","WW","JJ","NI","JJ","H4","H4","TE","NI","TE"],
			["FF","H1","H1","AA","AA","KK","KK","H2","H2","QQ","QQ","NI","H3","H3","JJ","NI","JJ","H4","H4","WW","TE","NI","TE"]
		];
		var reelList;
		var callback;
		var stopIndex;
		
		this.onInit = function(){
			
			reelList=new Array(5);
			
			for(var i=0;i<reelList.length;i++){
				reelList[i] = root["reel"+i];
				reelList[i].init();
				reelList[i].setStrip(stripList[i])
			}
		}
		this.playRNG = function (RNG,callfunc){
			var i
			callback = callfunc;
			if(RNG==null){
				RNG =new Array(5)
				for ( i= 0; i < stripList.length; i++) {
					RNG[i]=Math.floor(Math.random()*stripList[i].length)
				}
			}
			console.log("RNG::" + RNG);
			stopIndex = 0;
			
			for ( i= 0; i < reelList.length; i++) {
				reelList[i].playSpin();
				reelList[i].setTargetIndex(RNG[i]);
			}
			
			createjs.Tween.get(this)
				.wait(600).call(playReelStop);
			
		}
		
		function playReelStop() {
			if (stopIndex < reelList.length) {
				reelList[stopIndex].playStop(playReelStop);
				stopIndex++
			} else {
				callback.call();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.reel4 = new lib.Reel();
	this.reel4.name = "reel4";
	this.reel4.parent = this;
	this.reel4.setTransform(390.3,283,1,1,0,0,0,101.3,253);

	this.reel3 = new lib.Reel();
	this.reel3.name = "reel3";
	this.reel3.parent = this;
	this.reel3.setTransform(319.6,283,1,1,0,0,0,101.3,253);

	this.reel2 = new lib.Reel();
	this.reel2.name = "reel2";
	this.reel2.parent = this;
	this.reel2.setTransform(248.8,283,1,1,0,0,0,101.3,253);

	this.reel1 = new lib.Reel();
	this.reel1.name = "reel1";
	this.reel1.parent = this;
	this.reel1.setTransform(178.1,283,1,1,0,0,0,101.3,253);

	this.reel0 = new lib.Reel();
	this.reel0.name = "reel0";
	this.reel0.parent = this;
	this.reel0.setTransform(6,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.reel0},{t:this.reel1},{t:this.reel2},{t:this.reel3},{t:this.reel4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ReelSys, new cjs.Rectangle(0.2,-54,364,396), null);


(lib.Game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this
		init();
		
		function init() {
			createjs.Tween.get(this).wait(1).call(initChildren)
			window.addEventListener("keyup",onKeyUp);
		}
		
		function initChildren(){
			var instance = root.sysReel
			instance.onInit();
		}
		
		function onKeyUp(evt){
			switch (evt.keyCode){
				case 32:
					playDemo();
				break;
			}
		}
		
		function playDemo(){
			window.removeEventListener("keyup", onKeyUp);
			root.sysReel.playRNG(null,onDemoComplete);
		}
		
		function onDemoComplete() {
			//root.sysShowWin.demoShowWin();
			window.addEventListener("keyup",onKeyUp);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Logo
	this.instance = new lib.點陣圖20();
	this.instance.parent = this;
	this.instance.setTransform(0,72,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Char
	this._char = new lib.Char();
	this._char.name = "_char";
	this._char.parent = this;
	this._char.setTransform(180.5,91.5,1,1,0,0,0,180.5,91.5);

	this.timeline.addTween(cjs.Tween.get(this._char).wait(1));

	// sysReel
	this.sysReel = new lib.ReelSys();
	this.sysReel.name = "sysReel";
	this.sysReel.parent = this;
	this.sysReel.setTransform(669.1,292.5,1,1,0,0,0,670.1,141.5);

	this.timeline.addTween(cjs.Tween.get(this.sysReel).wait(1));

	// reelBgBase
	this.reelBgBase = new lib.reelBg_Base();
	this.reelBgBase.name = "reelBgBase";
	this.reelBgBase.parent = this;
	this.reelBgBase.setTransform(180,299.1,1,1,0,0,0,178,132.1);

	this.timeline.addTween(cjs.Tween.get(this.reelBgBase).wait(1));

	// background
	this.instance_1 = new lib.Background_Base();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.675,0.677);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Game, new cjs.Rectangle(-30,-33.4,503,673.4), null);


// stage content:
(lib.SlotTest_H5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var loadProcess;
		var root = this;
		init()
		
		function init(){
				
			root.game.visible=false 
			console.log("init")
			loadProcess=0
			var loader = new createjs.LoadQueue(false);
			//loader.addEventListener("fileload",onLoadFile);
			loader.addEventListener("progress",onLoadProcess);
			loader.addEventListener("complete",onLoadComplete);
			loader.loadManifest(lib.properties.manifest);
		}
		
		
		function onLoadProcess(evt){
			console.log(evt.progress)
		}
		
		function onLoadComplete(evt){
			console.log("onLoadComplete")
			root.game.visible=true 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.game = new lib.Game();
	this.game.name = "game";
	this.game.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.game).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,286.6,503,673.4);
// library properties:
lib.properties = {
	id: '2A00542F58582541B26B0CC4347B2EC5',
	width: 360,
	height: 640,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/SlotTest_H5_atlas_.png?1656690330866", id:"SlotTest_H5_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2A00542F58582541B26B0CC4347B2EC5'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;