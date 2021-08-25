var deleteDuplicates = function(head) {
    // sets current node to be head of list
    let current = head
    // runs until we are at the end of the list
    while (current !== null && current.next !== null) { 
        // checks to see if the current value and the next value are the same
        if (current.val === current.next.val){  
            // skips over the duplicate and the next value becomes 2x next
            current.next = current.next.next            
            // current value and the next value are not the same
        } else {  
            // moves to the next node on the list to run through the while again
            current = current.next 
        }
    
    }
    // returns the linked list with no duplicates
    return head  
};
