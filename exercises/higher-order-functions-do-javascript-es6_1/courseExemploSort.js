const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b); // crescente

// points.sort((a, b) => b - a); // decrescente

console.log(points); // [1, 5, 10, 25, 40, 100]