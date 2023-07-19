import { describe, expect, test } from "@jest/globals";
import Queue from "./queue-array-with-class.js";

const queue = new Queue();

describe('Data Structure: Queue (with class and objects', () => {

    describe('when the queue is empty ', () => {

        test('should return true', () => {
            expect(queue.isEmpty()).toBeTruthy();
        });

    });
});