import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";
import { eventType } from "../../types/event.types";
// Fetch all events with pagination
export const fetchEvents = createAsyncThunk(
    "events/fetchEvents",
    async ({ organizerId, page }: { organizerId: string; page: number }, thunkAPI) => {
        try {
            // Construct the API URL based on the organizerId and page
            const response = await api.get(`'events/listevent/organizerId=${organizerId}&page=${page}`);
            return response.data;
        } catch (error: any) {
            // Return a rejected value with error data or a fallback error message
            return thunkAPI.rejectWithValue(error.response?.data || "Error fetching events");
        }
    }
);


// Fetch event detail by ID
export const fetchEventDetail = createAsyncThunk(
    "events/fetchEventDetail",
    async (eventId: string, thunkAPI) => {
        try {
            const response = await api.get(`event${eventId}`);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || "Error fetching event detail");
        }
    }
);

// Create a new event
export const createEvent = createAsyncThunk(
    "events/createEvent",
    async (newEvent: Partial<eventType>, thunkAPI) => {
        try {
            const response = await api.post('');
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || "Error creating event");
        }
    }
);

// Update an event by ID
export const updateEvent = createAsyncThunk(
    "events/updateEvent",
    async ({ eventId, updatedEvent }: { eventId: string; updatedEvent: Partial<Events> }, thunkAPI) => {
        try {
            const response = await axios.put(`${API_URL}/${eventId}`, updatedEvent);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || "Error updating event");
        }
    }
);

// Delete an event by ID
export const deleteEvent = createAsyncThunk(
    "events/deleteEvent",
    async (eventId: string, thunkAPI) => {
        try {
            await axios.delete(`${API_URL}/${eventId}`);
            return eventId; // Return deleted event ID
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || "Error deleting event");
        }
    }
);
