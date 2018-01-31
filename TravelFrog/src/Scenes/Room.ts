class Room extends egret.Sprite {
	public constructor() {
		super();
		this.CreateScene();
		this.createBags();
	}

	private background: egret.Bitmap;
	private iconTrip: egret.Bitmap;
	private uiTrip: egret.Bitmap;

	private CreateScene() 
	{
		this.background = new egret.Bitmap();
		this.background.texture = RES.getRes("back_mainIn_png");
		this.addChild(this.background);
		this.background.width = Data.getscreenWidth();
		this.background.height = Data.getscreenHeight();

		this.iconTrip = new egret.Bitmap();
		this.iconTrip.texture = RES.getRes("Z11_png");
		this.addChild(this.iconTrip);
		this.iconTrip.x+=15;
		this.iconTrip.y+=Data.getscreenHeight()-this.iconTrip.height-10;
		this.iconTrip.touchEnabled=true;
		this.iconTrip.addEventListener(egret.TouchEvent.TOUCH_END,this.TouchTrip,this);

	}

	private TouchTrip()
	{
		if(!this.getChildByName( "Trip" ))
		{
			this.addChild(this.bagsSprite);
		}
		else
		{
			this.removeChild(this.bagsSprite);
		}
		
	}

	private bagsSprite:egret.Sprite;
	private createBags()
	{
		this.bagsSprite=new egret.Sprite();
		this.bagsSprite.name="Trip";

		let ui1: egret.Bitmap = new egret.Bitmap();
		ui1.texture=RES.getRes("frame_kaban_png");
		this.bagsSprite.addChild(ui1);
		ui1.width=Data.getscreenWidth()*0.8;
		ui1.height=Data.getscreenWidth ();
		ui1.x=(Data.getscreenWidth()-ui1.width)/2;
		ui1.y=(Data.getscreenHeight()-ui1.height)/2;

		let ui2: egret.Bitmap = new egret.Bitmap();
		ui2.texture=RES.getRes("close_png");
		this.bagsSprite.addChild(ui2);
		ui2.x=ui1.x+ui1.width-ui2.width;
		ui2.y=ui1.y;
		ui2.touchEnabled=true;
		ui2.addEventListener(egret.TouchEvent.TOUCH_END,this.TouchTrip,this);

		let ui3: egret.Bitmap = new egret.Bitmap();
		ui3.texture=RES.getRes("kanryou_png");
		this.bagsSprite.addChild(ui3);
		ui3.x=ui1.x+ui1.width/2-ui3.width/2;
		ui3.y=ui1.y+ui1.height-ui3.height-20;
		ui3.touchEnabled=true;
		ui3.addEventListener(egret.TouchEvent.TOUCH_END,this.Finish,this);

		let ui4: egret.Bitmap = new egret.Bitmap();
		ui4.texture=RES.getRes("kaban_png");
		this.bagsSprite.addChild(ui4);
		ui4.x=ui1.x+ui1.width/2-ui3.width/2;
		ui4.y=ui1.y+20;

		let ui5: egret.Bitmap = new egret.Bitmap();
		ui5.texture=RES.getRes("tsukue_frame_01_png");
		this.bagsSprite.addChild(ui5);
		ui5.width=(ui1.width-120)/2;
		ui5.x=ui1.x+40;
		ui5.y=ui4.y+ui4.height+40;

		let ui6: egret.Bitmap = new egret.Bitmap();
		ui6.texture=RES.getRes("tsukue_frame_01_png");
		this.bagsSprite.addChild(ui6);
		ui6.width=ui5.width;
		ui6.x=ui5.x+ui5.width+40;
		ui6.y=ui5.y;

		let ui7: egret.Bitmap = new egret.Bitmap();
		ui7.texture=RES.getRes("tsukue_frame_03_png");
		this.bagsSprite.addChild(ui7);
		ui7.width=ui1.width*0.5;
		ui7.x=ui1.x+ui1.width/2-ui7.width/2;
		ui7.y=ui3.y-ui7.height-40;

		let ui8: egret.Bitmap = new egret.Bitmap();
		ui8.texture=RES.getRes("scroll_r_png");
		this.bagsSprite.addChild(ui8);
		ui8.x=ui1.x+ui1.width-30;
		ui8.y=ui1.y+ui1.height/2-ui8.height/2;
		var tw = egret.Tween.get( ui8, { loop:true} );
		tw.to({x:ui1.x+ui1.width+20},500);
	}

	private Finish()
	{
		
	}
}