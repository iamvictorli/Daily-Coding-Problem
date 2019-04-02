// Problem 92
//
// This problem was asked by Airbnb.
//
// We're given a hashmap associating each courseId key with a list of courseIds values, which represents that the prerequisites of courseId are courseIds. Return a sorted ordering of courses such that we can finish all courses.
//
// Return null if there is no such ordering.
//
// For example, given {'CSC300': ['CSC100', 'CSC200'], 'CSC200': ['CSC100'], 'CSC100': []}, should return ['CSC100', 'CSC200', 'CSC300'].
//
// https://leetcode.com/problems/course-schedule-ii/

/**
 * Returns a sorted ordering of courses such that we can finish all courses
 * @param {Map<string, Set<string>>} courses
 * @return {string[]}
 */
function courseOrder(courses) {
  // get all courses with no dependencies and put onto queue
  const courseQueue = [];
  const ordering = [];

  const coursesKeys = Array.from(courses.keys());
  for (let i = 0; i < coursesKeys.length; i++) {
    const courseName = coursesKeys[i];

    if (courses.get(courseName).size === 0) {
      courseQueue.push(courseName);
    }
  }

  // dequeue course from queue and add to the ordering, then delete that course from any of the courses that may depend on it.
  // When deleting the course, if that course has no more dependencies, add onto the queue.
  while (courseQueue.length !== 0) {
    const course = courseQueue.shift();
    ordering.push(course);

    for (let i = 0; i < coursesKeys.length; i++) {
      const courseName = coursesKeys[i];
      if (course !== courseName) {
        const courseDependencies = courses.get(courseName);
        if (courseDependencies.has(course)) {
          courseDependencies.delete(course);
          if (courseDependencies.size === 0) courseQueue.push(courseName);
        }
      }
    }
  }

  // check if there are any dependencies left for all the courses. If there is, it is a cyclic graph, so there is no such ordering.
  for (let i = 0; i < coursesKeys.length; i++) {
    const courseName = coursesKeys[i];
    if (courses.get(courseName).size !== 0) return [];
  }

  // no more dependencies left, means the ordering is correct
  return ordering;
}

export default courseOrder;
