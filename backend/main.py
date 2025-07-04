from fastapi import FastAPI, Form, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
import networkx as nx

app = FastAPI()

# Allow frontend to access this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

class PipelineData(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]

@app.post("/pipelines/parse")
async def parse_pipeline(payload: PipelineData):
    nodes = payload.nodes
    edges = payload.edges

    G = nx.DiGraph()
    for node in nodes:
        G.add_node(node["id"])
    for edge in edges:
        G.add_edge(edge["source"], edge["target"])

    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": nx.is_directed_acyclic_graph(G)
    }
