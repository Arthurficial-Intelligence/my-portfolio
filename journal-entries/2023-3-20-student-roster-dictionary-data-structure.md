---
title: "Student Roster Dictionary Inversion"
topic: "The purpose of this journal was to focus on inverting a dictionary but to relate the data structure to a real world scenario"
slug: "student-roster-dictionary-inversion"
date: "2023-03-20"
---

# Student Roster Dictionary Inversion

This learning journal called for me to "Employ the dictionary so that it could be useful for something meaningful to you". I have chosen to work with data in education because the entire point of my getting my degree is to pursue a Ph.D. so that I conduct research and teach as my career and less industry software engineering as I do now.

I wanted to tackle some more meaningful scenarios to implement my dictionary for. For example, I wanted to use fake data for a study on the benefits of project-based learning in computer science, but the data just became too complex for the scope of this learning journal, so I went with what is below.

My original dictionary is a student roster. The keys represent courses at UofPeople while the values are lists that contain strings of the students in those courses. The shape this data currently has is very useful to maybe the teacher of one of the courses because they have a complete list of all the students taking their course.

However, for an advisor of these students, it may be better to have a dictionary of students, where the keys are the students, and the values are lists of the courses that particular student is taking. This could help them better serve each student individually.

```python
from pprint import pprint

# original dictionary
roster = {
    "CS1101": ["John Smith", "Alice Lee", "Bob Johnson"],
    "MATH1202": ["Jane Doe", "Alice Lee", "David Kim", "John Smith"],
    "UNIV1001": ["Samuel Lee", "Emily Chen", "John Smith"]
}

# modified invert function
def invert_dict(d):
    inverse = dict()
    # printing the original dictionary in a "pretty" format
    pprint(d, stream=None, indent=4)
    # looping through the keys of the oringal dictionary
    for course in d:
        # looping through the values in the lists of each course
        for student in d[course]:
            val = student
            # if val is not in the inverse dictionary, create a key of that value an assign the value to a list with the current course in it
            if val not in inverse:
                inverse[val] = [course]
            # else, append the current course at the end of the list in the appropriate keys value
            else:
                inverse[val].append(course)
    # print the inverted dictionary in a "pretty" format
    pprint(inverse, stream=None, indent=4)
    return inverse

# call the function and pass roster as an argument
invert_dict(roster)
```

In the above code, I have modified the original function in few ways as far as naming conventions and other subtle ways, but the main change is adding the nested loop. This loop is there so that we can traverse the lists of each key in the original dictionary. While this does make our function more complex, it is how we can traverse that second layer of data as shown in Downey's (2015) discussion of traversing a list(chap. 10.3) in our textbook. The original function was only set up to traverse a dictionary with one layer of abstraction. We have to modify it to accommodate two.

### Output:

```text
{
    'CS1101': ['John Smith', 'Alice Lee', 'Bob Johnson'],
    'MATH1202': ['Jane Doe', 'Alice Lee', 'David Kim', 'John Smith'],
    'UNIV1001': ['Samuel Lee', 'Emily Chen', 'John Smith']
}
{
    'Alice Lee': ['CS1101', 'MATH1202'],
    'Bob Johnson': ['CS1101'],
    'David Kim': ['MATH1202'],
    'Emily Chen': ['UNIV1001'],
    'Jane Doe': ['MATH1202'],
    'John Smith': ['CS1101', 'MATH1202', 'UNIV1001'],
    'Samuel Lee': ['UNIV1001']
}
```

### References

Downey, A. (2015). _Think Python: How to Think Like a Computer Scientist_ (2nd ed.). Green Tree Press. Retrieved from [https://greenteapress.com/wp/think-python-2e/](https://greenteapress.com/wp/think-python-2e/)
