import { Injectable } from "@angular/core";

// SO says I need to add injectable. Is that true?

@Injectable({
  providedIn: 'root'
})

export abstract class LibHeaderToken {
  abstract sayHi(): void;
}
