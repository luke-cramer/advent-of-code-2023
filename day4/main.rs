use std::collections::HashMap;
use std::collections::VecDeque;

fn main() {
    let input = include_str!("input.txt").lines();

    let mut winning_numbers: Vec<Vec<i32>> = Vec::new();
    let mut my_ticket: Vec<Vec<i32>> = Vec::new();

    for line in input {
        let parts: Vec<&str> = line.split(" | ").collect();

        let numbers: Vec<i32> = parts[0]
            .split_whitespace()
            .filter_map(|n| n.parse().ok())
            .collect();

        let ticket: Vec<i32> = parts[1]
            .split_whitespace()
            .filter_map(|n| n.parse().ok())
            .collect();

        winning_numbers.push(numbers);
        my_ticket.push(ticket);
    }

    let mut queue: VecDeque<usize> = VecDeque::new();
    let mut copy_map: HashMap<usize, usize> = HashMap::new();
    let mut total_count = 0;

    for (i, line) in winning_numbers.iter().enumerate() {
        total_count += 1;
        let count = count_matches(line, &my_ticket[i]);

        if count > 0 {
            copy_map.insert(i, count);
            push_to_queue(i, count, &mut queue);
        }
    }

    while let Some(i) = queue.pop_front() {
        total_count += 1;

        if let Some(&count) = copy_map.get(&i) {
            push_to_queue(i, count, &mut queue);
        }
    }

    println!("🧮 {}", total_count);
}

fn push_to_queue(i: usize, count: usize, queue: &mut VecDeque<usize>) {
    for j in i + 1..=i + count {
        queue.push_back(j);
    }
}

fn count_matches(line: &Vec<i32>, ticket: &Vec<i32>) -> usize {
    line.iter().filter(|&num| ticket.contains(num)).count()
}
