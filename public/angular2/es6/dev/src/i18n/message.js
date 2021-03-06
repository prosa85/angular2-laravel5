import { isPresent, escape } from 'angular2/src/facade/lang';
/**
 * A message extracted from a template.
 *
 * The identity of a message is comprised of `content` and `meaning`.
 *
 * `description` is additional information provided to the translator.
 */
export class Message {
    constructor(content, meaning, description = null) {
        this.content = content;
        this.meaning = meaning;
        this.description = description;
    }
}
/**
 * Computes the id of a message
 */
export function id(m) {
    let meaning = isPresent(m.meaning) ? m.meaning : "";
    let content = isPresent(m.content) ? m.content : "";
    return escape(`$ng|${meaning}|${content}`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9pMThuL21lc3NhZ2UudHMiXSwibmFtZXMiOlsiTWVzc2FnZSIsIk1lc3NhZ2UuY29uc3RydWN0b3IiLCJpZCJdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sMEJBQTBCO0FBRTFEOzs7Ozs7R0FNRztBQUNIO0lBQ0VBLFlBQW1CQSxPQUFlQSxFQUFTQSxPQUFlQSxFQUFTQSxXQUFXQSxHQUFXQSxJQUFJQTtRQUExRUMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUFBU0EsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUFBU0EsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWVBO0lBQUdBLENBQUNBO0FBQ25HRCxDQUFDQTtBQUVEOztHQUVHO0FBQ0gsbUJBQW1CLENBQVU7SUFDM0JFLElBQUlBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO0lBQ3BEQSxJQUFJQSxPQUFPQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxPQUFPQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUNwREEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsT0FBT0EsSUFBSUEsT0FBT0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7QUFDN0NBLENBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnQsIGVzY2FwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuLyoqXG4gKiBBIG1lc3NhZ2UgZXh0cmFjdGVkIGZyb20gYSB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGUgaWRlbnRpdHkgb2YgYSBtZXNzYWdlIGlzIGNvbXByaXNlZCBvZiBgY29udGVudGAgYW5kIGBtZWFuaW5nYC5cbiAqXG4gKiBgZGVzY3JpcHRpb25gIGlzIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcHJvdmlkZWQgdG8gdGhlIHRyYW5zbGF0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRlbnQ6IHN0cmluZywgcHVibGljIG1lYW5pbmc6IHN0cmluZywgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBudWxsKSB7fVxufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBpZCBvZiBhIG1lc3NhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkKG06IE1lc3NhZ2UpOiBzdHJpbmcge1xuICBsZXQgbWVhbmluZyA9IGlzUHJlc2VudChtLm1lYW5pbmcpID8gbS5tZWFuaW5nIDogXCJcIjtcbiAgbGV0IGNvbnRlbnQgPSBpc1ByZXNlbnQobS5jb250ZW50KSA/IG0uY29udGVudCA6IFwiXCI7XG4gIHJldHVybiBlc2NhcGUoYCRuZ3wke21lYW5pbmd9fCR7Y29udGVudH1gKTtcbn0iXX0=