class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class BresenhamRasterizer {

    rasterize(p1, p2) {

        let x0 = p1.x, y0 = p1.y;
        let x1 = p2.x, y1 = p2.y;

        const pixels = [];

        let dx = Math.abs(x1 - x0);
        let dy = Math.abs(y1 - y0);

        let sx = x0 < x1 ? 1 : -1;
        let sy = y0 < y1 ? 1 : -1;

        let err = dx - dy;

        while (true) {
            pixels.push(new Point(x0, y0));

            if (x0 === x1 && y0 === y1) break;

            let e2 = 2 * err;

            if (e2 > -dy) { err -= dy; x0 += sx; }
            if (e2 < dx) { err += dx; y0 += sy; }
        }

        return pixels;
    }
}
