<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    // Store contact form submissions
    public function store(Request $req)
    {
        // Validate incoming request
        $data = $req->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'country' => 'required|string|max:100',
            'subject' => 'required|string|max:255', // <-- added subject
            'message' => 'required|string',
        ]);

        // Link contact to logged-in user if available
        $data['user_id'] = $req->user()?->id ?? null;

        // Save contact to database
        $contact = Contact::create($data);

        return response()->json([
            'success' => true,
            'contact' => $contact
        ], 201);
    }

    // Fetch all contact submissions (admin dashboard)
    public function index()
    {
        $contacts = Contact::all(); 
        return response()->json($contacts);
    }
}
