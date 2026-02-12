// Point class for grid coordinates
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Bresenham's line drawing algorithm implementation
class BresenhamRasterizer {
    rasterize(p1, p2) {
        // Your code for Bresenham Rasterizer goes here
        const pixels = [];

        let x1 = Math.round(p1.x);
        let y1 = Math.round(p1.y);
        let x2 = Math.round(p2.x);
        let y2 = Math.round(p2.y);

        let dx = Math.abs(x2 - x1);
        let dy = Math.abs(y2 - y1);

        let sx = (x1 < x2) ? 1 : -1;
        let sy = (y1 < y2) ? 1 : -1;

        let err = dx - dy;

        while (true) {
            pixels.push(new Point(x1, y1));

            if (x1 === x2 && y1 === y2) break;

            let e2 = 2 * err;

            if (e2 > -dy) {
                err -= dy;
                x1 += sx;
            }

            if (e2 < dx) {
                err += dx;
                y1 += sy;
            }
        }

        return pixels;
    }
}