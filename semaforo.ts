export function updateLight(current: string): string {
    return current === "green" ? "yellow" : current === "yellow" ? "red" : current === "red" ? "green" : "";
  }

  console.log(updateLight("red"));