# https://www.hackerrank.com/challenges/30-inheritance
class Student(Person):

    #   Class Constructor
    #   
    #   Parameters:
    #   firstName - A string denoting the Person's first name.
    #   lastName - A string denoting the Person's last name.
    #   id - An integer denoting the Person's ID number.
    #   scores - An array of integers denoting the Person's test scores.
    #
    # Write your constructor here
    def __init__(self, firstName, lastName, id, scores):
        self.firstName = firstName
        self.lastName = lastName
        self.idNumber = id
        self.scores = scores

    #   Function Name: calculate
    #   Return: A character denoting the grade.
    #
    # Write your function here
    def calculate(self):
        average = 0
        totalScores = len(self.scores)
        
        for s in self.scores:
            average += s
        
        average /= totalScores
        
        if average >= 90: return 'O'
        elif average >= 80: return 'E'
        elif average >= 70: return 'A'
        elif average >= 55: return 'P'
        elif average >= 40: return 'D'
        else: return 'T'
