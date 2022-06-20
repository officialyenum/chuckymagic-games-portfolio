import { Request, Response } from "express";

class IndexController {
    public static index = (req: Request, res: Response, next: any) => {
        res.render("pages/home", {
            title: "Home Page!",
            showHeader: true,
            hasBuild: false
        });
    }
    public static about = (req: Request, res: Response, next: any) => {
        res.render("pages/about", {
            title: "About Page",
            showHeader: false,
            hasBuild: false
        });
    }
    public static tilevania = (req: Request, res: Response, next: any) => {
        res.render("pages/tilevania", {
            title: "Unity WebGL Player | Tile Vania",
            showHeader: false,
            hasBuild: true
        });
    }
    public static laserdefender = (req: Request, res: Response, next: any) => {
        res.render("pages/laserdefender", {
            title: "Unity WebGL Player | Laser Defender",
            showHeader: false,
            hasBuild: true
        });
    }
}

export default IndexController;