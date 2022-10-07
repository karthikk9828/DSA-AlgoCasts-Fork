// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

type CallBack = () => void;

export class Events {
  private events: Map<String, CallBack[]>;

  constructor() {
    this.events = new Map<String, CallBack[]>();
  }

  // Register an event handler
  on(eventName: string, callback: CallBack) {
    const currentEvents = this.events.get(eventName) ?? [];
    const newEvents = [...currentEvents, callback];
    this.events.set(eventName, newEvents);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName: string) {
    const callbacks = this.events.get(eventName) ?? [];
    for (const callback of callbacks) {
      callback();
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName: string) {
    this.events.delete(eventName);
  }
}
